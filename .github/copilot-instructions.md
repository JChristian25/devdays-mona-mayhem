# Mona Mayhem Copilot Instructions

## Project overview

Mona Mayhem is a retro arcade GitHub Contribution Battle Arena. The app compares GitHub contribution activity for two users and presents the result as an arcade-style battle experience.

## Technology stack

- Astro
- JavaScript and TypeScript
- Tailwind CSS and/or Astro scoped CSS
- Node.js runtime through the Astro Node adapter

## Development commands

- `npm install` — install dependencies
- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally

## Coding rules

- Keep UI components, API handlers, and utilities modular and focused.
- Follow the existing file naming and directory conventions.
- Prefer clean, readable code over clever abstractions.
- Use TypeScript types where they improve clarity and safety.
- Reuse existing helpers and patterns before introducing new ones.
- Keep Astro page logic close to its page or component unless it is shared.
- Use Tailwind CSS or Astro scoped CSS consistently with the surrounding code.
- Preserve the retro arcade visual direction when adding or changing UI.
- Handle invalid input and API failures explicitly; do not silently return fallback success responses.
- Keep changes narrowly scoped to the requested behavior.

## Astro guidance

- Use Astro components for server-rendered page structure and shared UI.
- Keep browser-only behavior in explicitly marked client-side scripts or hydrated components.
- Treat API routes as server code and validate route parameters before fetching external data.
- Ensure changes remain compatible with the configured Astro Node server output.

## Review checklist

- Confirm the implementation matches the Mona Mayhem product goal.
- Check that new files follow existing naming conventions.
- Verify modularity and readability before adding abstractions.
- Run the smallest relevant build or test check after making changes.
