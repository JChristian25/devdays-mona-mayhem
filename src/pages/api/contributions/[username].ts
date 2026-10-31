import type { APIRoute } from 'astro';

export const prerender = false;

type ContributionDay = {
	date: string;
	count: number;
	level: number;
};

type ContributionWeek = {
	week: number;
	days: ContributionDay[];
};

const USERNAME_PATTERN = /^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i;
const CALENDAR_PATTERN =
	/<(?:td|rect)\b[^>]*data-date="([^"]+)"[^>]*data-level="([^"]+)"[^>]*>/gi;
const COUNT_PATTERN = /(?:^|\s)([\d,]+)\s+contribution/i;
const NO_CONTRIBUTION_PATTERN = /no contributions/i;

const jsonResponse = (body: Record<string, unknown>, status: number, cache = true) =>
	new Response(JSON.stringify(body), {
		status,
		headers: {
			'Content-Type': 'application/json',
			...(cache ? { 'Cache-Control': 'public, max-age=300' } : {}),
		},
	});

const parseContributionDays = (html: string): ContributionDay[] => {
	const days: ContributionDay[] = [];
	let match: RegExpExecArray | null;

	while ((match = CALENDAR_PATTERN.exec(html)) !== null) {
		const [, date, rawLevel] = match;
		const level = Number.parseInt(rawLevel, 10);

		if (!date || !Number.isInteger(level) || level < 0 || level > 4) {
			continue;
		}

		const element = match[0];
		const ariaLabel = element.match(/aria-label="([^"]*)"/i)?.[1] ?? '';
		const countMatch = ariaLabel.match(COUNT_PATTERN);
		const count = countMatch
			? Number.parseInt(countMatch[1].replace(/,/g, ''), 10)
			: NO_CONTRIBUTION_PATTERN.test(ariaLabel)
				? 0
				: undefined;

		if (count === undefined || !Number.isInteger(count)) {
			continue;
		}

		days.push({ date, count, level });
	}

	return days.sort((a, b) => a.date.localeCompare(b.date));
};

const normalizeWeeks = (days: ContributionDay[]): ContributionWeek[] => {
	const weeks: ContributionWeek[] = [];

	for (let index = 0; index < days.length; index += 7) {
		weeks.push({
			week: weeks.length,
			days: days.slice(index, index + 7),
		});
	}

	return weeks.slice(-52);
};

export const GET: APIRoute = async ({ params }) => {
	const username = params.username?.trim();

	if (!username || !USERNAME_PATTERN.test(username)) {
		return jsonResponse({ error: 'Invalid GitHub username' }, 400, false);
	}

	try {
		const upstream = await fetch(`https://github.com/users/${encodeURIComponent(username)}/contributions`, {
			headers: { Accept: 'text/html' },
		});

		if (upstream.status === 404) {
			return jsonResponse({ error: 'GitHub user not found' }, 404);
		}

		if (!upstream.ok) {
			return jsonResponse({ error: 'GitHub contribution service unavailable' }, 502);
		}

		const days = parseContributionDays(await upstream.text());
		const weeks = normalizeWeeks(days);

		if (weeks.length !== 52) {
			return jsonResponse({ error: 'Invalid contribution calendar response' }, 502);
		}

		return jsonResponse({ username, weeks });
	} catch {
		return jsonResponse({ error: 'Failed to fetch GitHub contributions' }, 502);
	}
};
