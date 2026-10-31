<!-- l10n-sync: source-file="workshop/00-overview.md" -->
# 🎮 Mona Mayhem — Workshop do GitHub Copilot

---

> **Duração:** ~1 hora  
> **Nível:** Intermediário  
> **Stack:** Astro / Node.js / TypeScript

Construa um app retrô de arcade para comparar contribuições do GitHub — **Mona Mayhem** — enquanto aprende todo o espectro de fluxos de trabalho do GitHub Copilot. O workshop oferece **duas trilhas**: uma experiência no VS Code e uma experiência com o GitHub Copilot CLI.

---

## 🎯 Escolha sua trilha

- **Trilha VS Code** — permaneça no editor e pratique Chat, Plan Mode, Agent Mode, agentes em segundo plano e o ciclo de revisão integrado.
- **Trilha CLI** — permaneça no terminal e pratique `copilot`, contexto com `@file`, `/plan`, edições autônomas, `/fleet`, `/delegate` e `/review`.

Siga a trilha que corresponde ao seu fluxo de trabalho preferido.

---

## 📋 Lista de verificação rápida

Antes de começar, verifique:

- [ ] GitHub Copilot está habilitado para sua conta
- [ ] Node.js instalado
- [ ] Git instalado e configurado
- [ ] Seu navegador e terminal estão prontos

<!-- track:vscode:start -->
- [ ] VS Code **v1.107+** (sem atualizações pendentes)
- [ ] Conectado à extensão do **GitHub Copilot**
- [ ] Painel de Chat aberto e Agent pronto
<!-- track:vscode:end -->

<!-- track:cli:start -->
- [ ] GitHub Copilot CLI instalado e disponível como `copilot`
- [ ] Autenticado no CLI com `/login`
- [ ] Confortável usando comandos slash como `/help`, `/plan` e `/review`
<!-- track:cli:end -->

> 💡 **Dica:** Use o DevContainer para um ambiente pré-configurado se quiser um início rápido no VS Code.

---

## 🧠 O que você vai aprender

| # | Habilidade | Descrição |
|---|------------|-----------|
| 1 | **Engenharia de contexto** | Ensine o Copilot sobre sua base de código com instruções, referências e restrições claras |
| 2 | **Planejar primeiro** | Esboce a arquitetura antes da implementação |
| 3 | **Implementação agêntica** | Deixe o Copilot realizar trabalhos de codificação em várias etapas com sua supervisão |
| 4 | **Design iterativo** | Use o Copilot para transformar visuais e refinar detalhes de interação |
| 5 | **Fluxos de trabalho paralelos** | Divida o trabalho entre agentes, sessões ou tarefas delegadas |

<!-- track:vscode:start -->
### Foco nos recursos do VS Code

- **Chat + modo Ask** para exploração
- **Plan Mode** para prompts de arquitetura e design
- **Agent Mode** para implementação em múltiplos arquivos
- **Agentes em segundo plano e na nuvem** para polimento em paralelo
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Foco nos recursos do Copilot CLI

- **Sessões interativas do CLI** com `copilot`
- **`/plan` e Shift+Tab** para planejamento estruturado
- **Edições autônomas** com aprovações inline e `/diff`
- **`/fleet`, `/delegate` e `/review`** para paralelismo e controles de qualidade
<!-- track:cli:end -->

---

## 📚 Partes do workshop

| Parte | Título | Descrição |
|-------|--------|-----------|
| [**01**](01-setup.md) | Configuração e engenharia de contexto | Crie seu repositório, prepare seu ambiente e dê ao Copilot o contexto adequado |
| [**02**](02-plan-and-scaffold.md) | Planejamento e scaffold | Projete a API e a arquitetura da página antes de implementar |
| [**03**](03-agent-mode.md) | Construção do jogo | Conecte a página de batalha e os gráficos de contribuições com ajuda agêntica |
| [**04**](04-design-vibes.md) | Tematização orientada a design | Transforme o scaffold em uma experiência de arcade retrô |
| [**05**](05-polish.md) | Polimento e trabalho paralelo | Use fluxos multiagente para melhorar a UX, a resiliência e a qualidade |
| [**06**](06-bonus.md) | Bônus e extensões | Explore funcionalidades abertas, fluxos de compartilhamento e experimentos extras |

---

## 💡 Dicas Pro

1. **Mantenha o navegador aberto** — observe as atualizações em tempo real enquanto programa.
2. **Faça commits frequentes** — salve pontos de controle limpos enquanto itera.
3. **Refine o plano antes de implementar** — melhores planos levam a melhores resultados.
4. **Revise as mudanças do Copilot** — use a visualização de diferenças ou as ferramentas de revisão do CLI em vez de aceitar cegamente.

<!-- track:vscode:start -->
5. **Use pontos de controle e Desfazer** no chat se uma iteração sair do rumo.
<!-- track:vscode:end -->

<!-- track:cli:start -->
5. **Use `/session`, `/context` e `/share file`** quando quiser inspecionar ou preservar seu trabalho.
<!-- track:cli:end -->
