---
name: "estilo-financore"
description: "El sistema de diseño de Financore — colores, tipografía, espaciado, componentes y lo que nunca se usa. Úsala al diseñar, maquetar o revisar cualquier pantalla, landing, guía web o material con marca Financore."
---

# Estilo Financore

## Cómo se usa esto

Todo lo que viene abajo es la única fuente de verdad visual de cualquier cosa con marca Financore.

- **Los valores de abajo le ganan a tu gusto.** Si abajo dice que el azul es `#1565C0`, no uses otro azul porque se vea mejor.
- **Lo que no está abajo, se pregunta.** Si falta un valor que hace falta (un color de error, un tamaño de botón chico), no lo inventes en silencio: propón uno derivado de los que sí están y di que lo derivaste.
- **Al terminar una pantalla, revísala contra esto.** Lista en qué se salió y arréglalo antes de entregar.
- **La sección "Lo que no se usa" es la más importante.** Es la que evita que el resultado se vea genérico.
- **Si te piden usar otro catálogo de estilos o paletas** (UI/UX Pro Max, por ejemplo), este archivo manda. El otro catálogo aporta layout y componentes, no colores ni tipografía.

## Ajustes de este proyecto

- Todo el texto va en **español**. La marca le habla en español a su audiencia.
- El dorado es **solo fondo de botón o texto sobre fondo oscuro**. Nunca texto dorado sobre blanco.
- Links externos siempre con `target="_blank"`. El email siempre como `mailto:`.
- El contenido tiene que ser **visible por defecto**: nada con `opacity: 0` sin el patrón `js-loaded` de más abajo.
- En el footer la marca va como texto HTML, no como imagen de logo.
- La plataforma se llama **Financore Platform**. Nunca otro nombre.

## El sistema de diseño

### 01 · Tono y principios

Financore es dinero serio hablándole en español a gente que trabaja. La pantalla tiene que verse **institucional y confiable antes que moderna**: banco privado, no startup.

- **Azul marino primero.** El navy `#0D2B55` es la voz de la marca: navegación, encabezados, footer, fondos de impacto. Es lo que hace que se vea caro.
- **El dorado se gana, no se reparte.** `#E8A020` marca la acción principal y nada más. Una pantalla con tres cosas doradas ya perdió.
- **Serif para títulos, sans para todo lo demás.** Merriweather da la autoridad, Inter da la legibilidad. Esa mezcla es la firma visual.
- **Aire generoso.** 88px entre secciones. Lo apretado se lee barato.
- **Claridad sobre ingenio.** El lector está decidiendo si confiarle dinero a alguien. Nada de copy críptico ni de layouts que haya que descifrar.
- **Números grandes y concretos.** Cifras, plazos y pasos numerados hacen más por la confianza que cualquier adjetivo.

### 02 · Colores

Cada token con su código exacto y el trabajo que hace. Entre paréntesis, el contraste medido contra su fondo típico.

```css
:root {
  /* Azules — la voz institucional */
  --navy:       #0D2B55;  /* fondo de nav, footer, gradientes de hero, títulos (14.1:1 sobre blanco) */
  --navy-light: #1A3F78;  /* hover de navy, texto navy secundario (10.4:1 sobre blanco) */
  --navy-pale:  #E8EFF9;  /* fondos de bloque muy suaves */
  --blue:       #1565C0;  /* botones secundarios, enlaces, acentos (5.8:1 sobre blanco) */
  --blue-light: #1E88E5;  /* gradientes y hovers — NO para texto sobre blanco (3.7:1) */
  --blue-pale:  #E3F0FD;  /* fondo de badges y etiquetas de sección */

  /* Dorado — solo la acción principal */
  --gold:       #E8A020;  /* fondo del botón primario, con texto navy encima (6.4:1) */
  --gold-light: #F5BC4A;  /* texto sobre navy: acentos de título, headers de footer (8.2:1) */
  --gold-pale:  #FEF6E4;  /* fondo de la sección de CTA final */

  /* Neutros */
  --white:      #FFFFFF;
  --gray-100:   #F4F6FA;  /* fondo de página */
  --gray-200:   #E8ECF3;  /* bordes y divisores */
  --gray-400:   #9BA8BB;  /* decorativo: iconos apagados, placeholders. NUNCA texto de lectura (2.4:1) */
  --gray-600:   #5A6680;  /* texto de cuerpo secundario, pies de foto (5.8:1 sobre blanco) */
  --gray-800:   #1E2A3A;  /* texto principal de cuerpo (14.5:1 sobre blanco) */

  /* Semánticos */
  --red:        #D32F2F;  /* alertas y etiquetas negativas — sobre blanco o como borde */
  --red-dark:   #B71C1C;  /* el rojo cuando va como TEXTO sobre --red-pale (5.7:1) */
  --red-pale:   #FDECEA;
  --green:      #2E7D32;  /* etiquetas positivas (4.6:1 sobre --green-pale) */
  --green-pale: #E8F5E9;

  /* Sombras — siempre teñidas de navy, nunca negro puro */
  --shadow-sm: 0 1px 3px rgba(13,43,85,0.08), 0 1px 2px rgba(13,43,85,0.04);
  --shadow-md: 0 4px 16px rgba(13,43,85,0.10), 0 2px 6px rgba(13,43,85,0.06);
  --shadow-lg: 0 12px 40px rgba(13,43,85,0.14);
}
```

**Reglas de uso del color**

- Fondo de página: `--gray-100`. Fondo de bloques de contenido: `--white`. Se alternan sección por sección.
- Un solo gradiente en toda la página, y es el del hero: `linear-gradient(155deg, #0D2B55 0%, #1565C0 55%, #1E88E5 100%)`. El de la sección de cita es su variante corta: `linear-gradient(135deg, #0D2B55 0%, #1565C0 100%)`.
- El dorado aparece como máximo en dos lugares por pantalla: el botón primario del hero y el acento en itálica del título.
- Sobre navy, el texto secundario va en `rgba(255,255,255,0.78)` y el terciario en `rgba(255,255,255,0.6)`. Por debajo de 0.6 ya no se lee.
- Rojo y verde solo como semántica (bien / mal, sube / baja). Nunca decorativos.

### 03 · Tipografía

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Merriweather:wght@700;900&display=swap" rel="stylesheet">
```

- **Display / títulos:** `Merriweather`, serif, peso 700 o 900.
- **Cuerpo / interfaz:** `Inter`, sans-serif, pesos 300 a 800.

| Token | Familia | Tamaño | Peso | Interlineado | Uso |
|---|---|---|---|---|---|
| hero | Merriweather | `clamp(36px, 5.5vw, 68px)` | 900 | 1.15 | Título del hero, blanco sobre navy |
| h2 | Merriweather | `clamp(28px, 3.6vw, 42px)` | 700 | 1.25 | Apertura de sección |
| h3 | Merriweather | 24px | 700 | 1.3 | Título de tarjeta o de paso |
| subtítulo | Inter | 18px | 300 | 1.6 | Bajada del hero |
| cuerpo-lg | Inter | 17px | 400 | 1.7 | Párrafo de entrada de sección |
| cuerpo | Inter | 16px | 400 | 1.7 | Párrafo por defecto |
| cuerpo-sm | Inter | 14px | 400 | 1.6 | Texto de tarjeta, columnas de footer |
| botón | Inter | 15px | 700 | 1.2 | Todas las etiquetas de botón |
| etiqueta | Inter | 11px | 700 | 1.2 | Badge de sección, mayúsculas, `letter-spacing: 2.5px` |
| tag | Inter | 12px | 600 | 1.2 | Etiquetas de estado dentro de tarjetas |
| footer-head | Inter | 12px | 700 | 1.2 | Encabezado de columna, mayúsculas, `letter-spacing: 2px` |

**Principios**

- Interlineado de cuerpo **1.7**. Es la mitad de por qué el texto se ve caro.
- El acento en itálica del título del hero va en `--gold-light`, y es el único texto dorado de la página.
- Mayúsculas solo en badges y encabezados de footer, siempre con tracking positivo. Nunca en títulos ni en párrafos.
- Merriweather nunca baja de 24px y nunca se usa para cuerpo.

### 04 · Espaciado

Unidad base 4px.

```
xxs 4px · xs 8px · sm 12px · md 16px · lg 20px · xl 24px · 2xl 32px · 3xl 48px
sección 88px (vertical) · 24px (horizontal)
```

- Padding de sección: `88px 24px`. En móvil baja a `56px 20px`.
- Padding interior de tarjeta: `32px 28px`. En móvil `24px 20px`.
- Gap de grid de tarjetas: `20px`.
- Gap entre columnas de footer: `48px`.
- Altura de nav: `68px`, fija.
- Padding de botón primario: `15px 34px`. Botón de nav: `10px 22px`.

### 05 · Componentes

**Botones**

```css
.btn-primary {            /* la acción principal, una por pantalla */
  background: var(--gold); color: var(--navy);
  padding: 15px 34px; border-radius: 8px;
  font: 700 15px Inter, sans-serif;
}
.btn-primary-dark {       /* la acción principal sobre fondo claro */
  background: var(--navy); color: #fff;
  padding: 15px 34px; border-radius: 8px; font-weight: 700;
}
.btn-primary-dark:hover { background: var(--blue); transform: translateY(-2px); }
.btn-ghost {              /* secundaria sobre el hero */
  border: 2px solid rgba(255,255,255,0.35); color: #fff;
  background: transparent; padding: 13px 32px; border-radius: 8px;
}
```

**Tarjeta**

```css
.card {
  background: #fff; border: 1px solid var(--gray-200);
  border-radius: 16px; padding: 32px 28px; position: relative; overflow: hidden;
  transition: border-color .25s, transform .25s, box-shadow .25s;
}
.card:hover { border-color: var(--blue-light); transform: translateY(-4px); box-shadow: var(--shadow-md); }
.card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(to right, var(--blue), var(--blue-light));
  opacity: 0; transition: opacity .25s;
}
.card:hover::before { opacity: 1; }
```

**Badge de sección y línea de acento**

```css
.section-label {
  display: inline-block; background: var(--blue-pale); color: var(--blue);
  font: 700 11px Inter, sans-serif; letter-spacing: 2.5px; text-transform: uppercase;
  padding: 5px 14px; border-radius: 100px; margin-bottom: 16px;
}
.divider-line {
  width: 56px; height: 4px; border-radius: 4px; margin-bottom: 24px;
  background: linear-gradient(to right, var(--blue), var(--gold));
}
```

**Tags de estado**

```css
.tag      { font: 600 12px Inter, sans-serif; padding: 3px 10px; border-radius: 4px; }
.tag-good { background: var(--green-pale); color: var(--green); }
.tag-bad  { background: var(--red-pale);   color: var(--red-dark); }
```

**Caja de alerta**

```css
.problem-box {
  background: var(--red-pale); border: 1px solid rgba(211,47,47,0.15);
  border-left: 4px solid var(--red); border-radius: 12px; padding: 36px 44px;
}
```

**Barras de dato** (utilización, progreso, comparativas)

```css
.util-bar  { height: 10px; background: var(--gray-200); border-radius: 100px; overflow: hidden; }
.fill-good { background: linear-gradient(to right, #2E7D32, #4CAF50); }
.fill-warn { background: linear-gradient(to right, #E65100, #FF9800); }
.fill-bad  { background: linear-gradient(to right, #B71C1C, #E53935); }
@keyframes fillBar { from { width: 0 !important; } }
```

**Timeline de pasos**

```css
.timeline { position: relative; padding-left: 48px; }
.timeline::before {
  content: ''; position: absolute; left: 15px; top: 8px; bottom: 8px; width: 2px;
  background: linear-gradient(to bottom, var(--blue), var(--blue-light), transparent);
}
.timeline-dot {
  position: absolute; left: -41px; top: 5px; width: 16px; height: 16px;
  border-radius: 50%; background: var(--blue); border: 3px solid #fff;
  box-shadow: 0 0 0 2px var(--blue-light);
}
```

**Nav**

```css
nav {
  position: fixed; inset: 0 0 auto 0; z-index: 100; height: 68px;
  display: flex; justify-content: space-between; align-items: center; padding: 0 40px;
  background: #fff; border-bottom: 1px solid var(--gray-200); box-shadow: var(--shadow-sm);
}
```
Logo en PNG transparente con sus colores originales, sin filtros. Botón de nav en `--blue` con texto blanco, radio 6px.

**Hero**

```css
.hero {
  min-height: 100vh; padding: 120px 24px 80px;
  background: linear-gradient(155deg, #0D2B55 0%, #1565C0 55%, #1E88E5 100%);
}
```
Título Merriweather 900 blanco, acento en itálica `--gold-light`. Bajada Inter 300 en `rgba(255,255,255,0.78)`. Fila de stats: número en `--gold-light`, etiqueta en `rgba(255,255,255,0.6)`.

**Sección de CTA final**

```css
.cta-section {
  background: var(--gold-pale); border-top: 1px solid rgba(232,160,32,0.2);
  padding: 88px 24px; text-align: center;
}
```
Título navy, botón `.btn-primary-dark`.

**Footer**

```css
footer { background: var(--navy); color: rgba(255,255,255,0.7); padding: 56px 24px 36px; }
.footer-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 48px; }
.footer-col h4 { color: var(--gold-light); font: 700 12px Inter; letter-spacing: 2px; text-transform: uppercase; }
.footer-col a:hover { color: var(--gold-light); }
.footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); font-size: 13px; color: rgba(255,255,255,0.35); }
```
La marca en el footer va como texto, no como imagen:
```html
Financore <span style="color:var(--gold-light);">Solutions</span>
```

### 06 · Layout y densidad

- Ancho máximo de contenido: **1100px**, centrado.
- Grid de tarjetas: `repeat(auto-fill, minmax(300px, 1fr))`, gap 20px. 3 columnas en escritorio, 2 en tableta, 1 en móvil.
- Radio de tarjeta 16px, de botón 8px, de badge 100px, de tag 4px. No hay más radios.
- Densidad **aireada**: las secciones respiran 88px y los párrafos van a 1.7 de interlineado.
- Ritmo de página: fondo `--gray-100` y `--white` alternando, con dos interrupciones oscuras (hero y cita) y una dorada pálida (CTA final).

**Estructura estándar de una guía web Financore, en orden**

1. **Nav** — logo + enlaces internos + botón de contacto.
2. **Hero** — título de impacto, bajada, fila de stats, dos CTAs.
3. **Problema** — fondo blanco, badge, título Merriweather, caja de alerta roja.
4. **Contenido / factores** — fondo `--gray-100`, grid de tarjetas blancas con número grande, título, cuerpo y tag.
5. **Visual de datos** — fondo blanco, barras o gráficos.
6. **Cita** — frase de impacto sobre el gradiente navy.
7. **Sistema / pasos** — fondo blanco, timeline vertical y checklist ✓ / ✕.
8. **CTA final** — fondo `--gold-pale`, título navy, botón navy.
9. **Footer** — tres columnas: marca, contacto, servicios.

**Responsive, corte único en 768px**

```css
@media (max-width: 768px) {
  nav { padding: 0 20px; }
  .nav-links { display: none; }
  .footer-inner { grid-template-columns: 1fr; gap: 32px; }
  .hero-stats { gap: 24px; }
  .hero-stat-divider { display: none; }
  .problem-box, .checklist-box, .util-visual { padding: 24px 20px; }
  .timeline { padding-left: 36px; }
  section { padding: 56px 20px; }
}
```

### 07 · Movimiento

Discreto y corto. El movimiento confirma, no entretiene.

- Transiciones de hover: `0.25s`. Entradas al hacer scroll: `0.65s ease`.
- Solo tres movimientos existen: el `translateY(-4px)` de la tarjeta al hover, el `translateY(-2px)` del botón, y la entrada `fadeUp` de 28px al aparecer.
- **El contenido tiene que verse aunque el JS no cargue.** El patrón es este, y no hay otro:

```css
.reveal { opacity: 1; transform: translateY(0); transition: opacity .65s ease, transform .65s ease; }
.js-loaded .reveal { opacity: 0; transform: translateY(28px); }
.js-loaded .reveal.visible { opacity: 1; transform: translateY(0); }
```

```js
document.body.classList.add('js-loaded');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), (i % 4) * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

- Escalonado de entrada: 80ms entre elementos, máximo cuatro.
- Respetar `prefers-reduced-motion: reduce` desactivando transiciones y `@keyframes`.

### 08 · Accesibilidad

Contrastes medidos, no estimados.

- Texto de cuerpo: `--gray-800` sobre blanco (14.5:1) o `--gray-600` sobre blanco (5.8:1). Ambos pasan AA.
- Enlaces y acentos: `--blue` sobre blanco 5.8:1 ✓, sobre `--blue-pale` 5.0:1 ✓.
- Botón primario: navy sobre `--gold` 6.4:1 ✓. **Blanco sobre `--gold` da 2.2:1 y no se usa nunca.**
- Sobre navy: blanco 14.1:1 ✓, `--gold-light` 8.2:1 ✓, `rgba(255,255,255,0.78)` ≈ 8.6:1 ✓, `rgba(255,255,255,0.6)` ≈ 5.6:1 ✓.
- `--blue-light` sobre blanco da 3.7:1: solo para texto de 24px o más, iconos y gradientes. Nunca párrafos.
- `--gray-400` da 2.4:1: decorativo únicamente.
- Tag negativo: usar `--red-dark` sobre `--red-pale` (5.7:1). `--red` puro sobre `--red-pale` se queda en 4.4:1 y no pasa.
- Área mínima de toque 44×44px. Texto mínimo 14px, y 16px en campos de formulario para que iOS no haga zoom.
- Foco visible siempre: `outline: 2px solid var(--blue); outline-offset: 2px`. No se quita con `outline: none` sin reemplazo.
- Nada se comunica solo por color: bien y mal llevan también ✓ / ✕ o texto.
- Jerarquía de encabezados sin saltos, un solo `h1` por página, `alt` en toda imagen con contenido.

### 09 · Lo que no se usa

Esta es la parte que evita que la pantalla se vea hecha por una máquina.

- **Degradados morado a azul**, ni ningún morado. La paleta es navy, azul, dorado y neutros.
- **Gradientes fuera del hero y de la sección de cita.** Los fondos de tarjeta, de botón y de sección son planos.
- **Texto dorado sobre fondo claro.** El dorado sobre blanco da 2.2:1.
- **Blanco sobre dorado.** Sobre dorado va navy.
- **Más de dos elementos dorados por pantalla.**
- **Sombras negras.** Todas las sombras van teñidas de navy con las variables `--shadow-*`.
- **Sombras de más de 40px de desenfoque**, y ninguna sombra sobre fondo oscuro.
- **Radios fuera de la escala** (4, 6, 8, 16, 100px). Nada de 20px porque se vea bien.
- **Merriweather en cuerpo de texto** ni por debajo de 24px.
- **Mayúsculas en títulos o párrafos.** Solo badges y encabezados de footer.
- **Interlineado por debajo de 1.6 en cuerpo.**
- **Emojis como iconos de interfaz.** Iconos SVG monocromos en `--blue` o `--gray-600`.
- **Fondos con opacidad 0 sin el patrón `js-loaded`**, y ninguna animación que tarde más de 0.7s.
- **Carruseles automáticos, contadores regresivos falsos y cualquier señal de urgencia inventada.** La marca vende confianza financiera.
- **Stock photos genéricas de gente dándose la mano** o de gráficos flotantes.
- **Fondos oscuros para secciones de lectura larga.** El oscuro es para el hero, la cita y el footer.
- **Placeholder en vez de label** en formularios.
- **Texto sobre imagen sin capa de contraste.**

## Al terminar

Compara la pantalla contra este archivo y di en qué se salió, sección por sección: colores, tipografía, espaciado, componentes, movimiento, accesibilidad y la lista de "lo que no se usa". Casi siempre hay dos o tres. Arréglalas antes de entregar.