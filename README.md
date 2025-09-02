## DiveFive Landing

Landing page de marketing para la app de buceo DiveFive construida con Vue 3 y Vite.

## Ejecutar localmente
1. Instalar dependencias (opcional si ya están instaladas): `npm install`
2. Iniciar el servidor de desarrollo: `npm run dev`
3. Abrir <http://localhost:5173> en el navegador
4. Usar los enlaces del footer para visitar `/features`, `/faq`, `/privacy` y `/press-kit`

## Deploy en Vercel
1. Crear un proyecto en [Vercel](https://vercel.com/) y enlazar este repositorio
2. Configurar comando de build: `npm run build`
3. Añadir las imágenes listadas en `public/ASSETS.md` antes de desplegar
4. Cada push a la rama principal o a una PR generará una preview automática

## Imágenes
Los archivos de imagen no se incluyen en el repositorio. Consulta `public/ASSETS.md` para conocer los nombres de archivo que debes agregar manualmente en `public/`.

## Archivos relevantes
- `index.html`
- `src/main.js`
- `src/App.vue`
- `src/router.js`
- `src/pages/Features.vue`
- `src/pages/Faq.vue`
- `src/pages/Privacy.vue`
- `src/pages/PressKit.vue`

## Pruebas
- `npm run dev`
