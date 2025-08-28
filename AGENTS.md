# AGENTS.md para Codex — DiveFive Webapp

Build: npm ci && npm run build  
Dev:   npm run dev  

Convenciones:
- Nuxt 3 + Tailwind, TypeScript de base.
- Cliente auth/db: Supabase (URL y anon key en runtimeConfig).
- Rutas: pages/login.vue, dashboard.vue, u/[handle].vue

Tareas esperadas por Codex:
- Agregar Supabase (Auth + perfiles)
- Crear páginas y lógica de login, dashboard, perfil público
- Agregar tests o accesibilidad básica
- Integración de estadísticas/visualizaciones en futuro

Reglas:
- Commits pequeños y descriptivos ("feat: ", "fix: ", etc.)
- No incluir `.env` ni secrets
