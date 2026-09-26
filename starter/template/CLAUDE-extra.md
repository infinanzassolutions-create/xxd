
# Cómo construir en este proyecto

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS.
- Animaciones con **Motion**: importa desde `motion/react`. Usa entradas al hacer scroll, apariciones escalonadas y transiciones suaves en hover. Respeta `prefers-reduced-motion`.
- El contenido debe verse aunque el JavaScript no cargue: nada queda con `opacity: 0` en el HTML inicial.

## Diseño
- Antes de crear o cambiar cualquier pantalla, usa la skill `frontend-design`.
- Si la web es de **Financore Solutions**, usa además `estilo-financore` y `financore-brand`. Esas dos mandan sobre `frontend-design` en colores, tipografía y componentes.
- Todo el texto de marca Financore va en español.

## Componentes de 21st.dev
Cuando te pegue un componente de 21st.dev (o el comando de instalación de su página):
1. Instálalo o crea el archivo en `components/`.
2. Adáptalo a los tokens de diseño de las skills: colores, tipografía, radios. Nada de colores sueltos.
3. Reemplaza el texto de ejemplo por contenido real y agrega las animaciones de entrada con Motion.

## Forma de trabajar
- Construye sección por sección y muéstrame cada una antes de seguir.
- No inventes testimonios, cifras ni precios: si faltan datos reales, pregúntame.
- Al terminar: imágenes con carga diferida, fuentes optimizadas y revisa que en móvil no haya scroll horizontal.
