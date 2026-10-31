# 🎮 Mona Mayhem — Taller de GitHub Copilot

---

> **Duración:** ~1 hora  
> **Nivel:** Intermedio  
> **Stack:** Astro / Node.js / TypeScript

Construye una aplicación retro de comparación de contribuciones de GitHub — **Mona Mayhem** — mientras aprendes todo el espectro de flujos de trabajo de GitHub Copilot. El taller ofrece **dos pistas**: una experiencia con VS Code y otra con GitHub Copilot CLI.

## 🎯 Elige tu pista

- **Pista de VS Code** — trabaja dentro del editor y practica Chat, Plan Mode, Agent Mode, agentes en segundo plano y el ciclo de revisión integrado.
- **Pista de CLI** — trabaja en el terminal y practica `copilot`, contexto con `@file`, `/plan`, ediciones autónomas, `/fleet`, `/delegate` y `/review`.

Sigue la pista que corresponda a tu flujo de trabajo preferido.

## 📋 Lista de comprobación rápida

Antes de empezar, comprueba lo siguiente:

- [ ] GitHub Copilot está habilitado para tu cuenta
- [ ] Node.js está instalado
- [ ] Git está instalado y configurado
- [ ] El navegador y el terminal están listos

<!-- track:vscode:start -->
- [ ] VS Code **v1.107+** (sin actualizaciones pendientes)
- [ ] Has iniciado sesión en la extensión de **GitHub Copilot**
- [ ] El panel de Chat está abierto y Agent está listo
<!-- track:vscode:end -->

<!-- track:cli:start -->
- [ ] GitHub Copilot CLI está instalado y disponible como `copilot`
- [ ] Has iniciado sesión en la CLI con `/login`
- [ ] Te sientes cómodo usando comandos slash como `/help`, `/plan` y `/review`
<!-- track:cli:end -->

> 💡 **Consejo:** Usa el DevContainer para disponer de un entorno preconfigurado si quieres empezar rápidamente en VS Code.

## 🧠 Qué aprenderás

| N.º | Habilidad | Descripción |
|---|-------|-------------|
| 1 | **Ingeniería de contexto** | Enseñar a Copilot cómo es tu código base mediante instrucciones, referencias y restricciones claras |
| 2 | **Planificar primero** | Diseñar la arquitectura antes de implementar |
| 3 | **Implementación agéntica** | Dejar que Copilot realice trabajo de programación en varios pasos bajo tu supervisión |
| 4 | **Diseño iterativo** | Usar Copilot para transformar los elementos visuales y perfeccionar los detalles de interacción |
| 5 | **Flujos de trabajo paralelos** | Dividir el trabajo entre agentes, sesiones o tareas delegadas |

<!-- track:vscode:start -->
### Enfoque de funcionalidades de VS Code

- **Chat y modo Ask** para explorar
- **Plan Mode** para prompts de arquitectura y diseño
- **Agent Mode** para implementar en varios archivos
- **Agentes en segundo plano y en la nube** para pulir en paralelo
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Enfoque de funcionalidades de Copilot CLI

- **Sesiones interactivas de CLI** con `copilot`
- **`/plan` y Shift+Tab** para planificar de forma estructurada
- **Ediciones autónomas** con aprobaciones integradas y `/diff`
- **`/fleet`, `/delegate` y `/review`** para paralelismo y controles de calidad
<!-- track:cli:end -->

## 📚 Partes del taller

| Parte | Título | Descripción |
|------|-------|-------------|
| [**01**](01-setup.md) | Configuración e ingeniería de contexto | Crear el repositorio, preparar el entorno y proporcionar a Copilot el contexto adecuado |
| [**02**](02-plan-and-scaffold.md) | Planificación y estructura | Diseñar la API y la arquitectura de la página antes de implementar |
| [**03**](03-agent-mode.md) | Construir el juego | Conectar la página de batalla y los gráficos de contribuciones con ayuda agéntica |
| [**04**](04-design-vibes.md) | Tematización orientada al diseño | Convertir la estructura en una experiencia de arcade retro |
| [**05**](05-polish.md) | Pulido y trabajo paralelo | Usar flujos multiagente para mejorar la UX, la resiliencia y la calidad |
| [**06**](06-bonus.md) | Extras y extensiones | Explorar funcionalidades abiertas, flujos para compartir y experimentos adicionales |

## 💡 Consejos profesionales

1. **Mantén abierto el navegador** para ver las actualizaciones mientras programas.
2. **Haz commits con frecuencia** para guardar puntos de control limpios mientras iteras.
3. **Perfecciona el plan antes de implementar**: los planes mejores producen mejores resultados.
4. **Revisa los cambios de Copilot**: usa la vista de diferencias o las herramientas de revisión de la CLI en lugar de aceptarlos a ciegas.
5. **Usa puntos de control y Deshacer** en el chat si una iteración se desvía.
6. **Usa `/session`, `/context` y `/share file`** cuando quieras inspeccionar o conservar tu trabajo.
