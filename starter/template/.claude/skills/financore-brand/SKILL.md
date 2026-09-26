---
name: financore-brand
description: Applies Financore Solutions' official brand colors, typography, and design system to any web guide, HTML artifact, landing page, or marketing material. Use whenever the user asks to create a guide, web page, presentation, or any content for Financore Solutions. This skill contains the complete design system, contact info, services, and component library.
---

# Financore Solutions — Brand & Design System

## 🏢 Company Info

- **Brand name:** Financore Solutions
- **Tagline:** *Capital inteligente. Crecimiento estratégico. Acompañamiento real.*
- **Website:** https://financoresolutions.com
- **Email:** info@financoresolutions.com
- **Phones:** 470-750-2003 / 833-666-1957
- **Language:** Spanish (español)

### Services
1. Estructuración empresarial
2. Financiación y crédito
3. Planificación financiera (FP&A)
4. Cumplimiento normativo y gestión de riesgos
5. Formación y mentoría

---

## 🎨 Color Palette (CSS Variables)

```css
:root {
  --navy:       #0D2B55;   /* Primary — nav bg, footer bg, headings */
  --navy-light: #1A3F78;   /* Hover states */
  --navy-pale:  #E8EFF9;
  --blue:       #1565C0;   /* Buttons, accents, links */
  --blue-light: #1E88E5;   /* Gradients, hovers */
  --blue-pale:  #E3F0FD;   /* Badges, section labels bg */
  --gold:       #E8A020;   /* Primary CTA buttons */
  --gold-light: #F5BC4A;   /* Text on dark backgrounds, footer headers */
  --gold-pale:  #FEF6E4;   /* CTA section background */
  --white:      #FFFFFF;
  --gray-100:   #F4F6FA;   /* Page background */
  --gray-200:   #E8ECF3;   /* Borders, dividers */
  --gray-400:   #9BA8BB;
  --gray-600:   #5A6680;   /* Body text */
  --gray-800:   #1E2A3A;   /* Primary text */
  --red:        #D32F2F;   /* Negative tags, alerts */
  --red-pale:   #FDECEA;
  --green:      #2E7D32;   /* Positive tags */
  --green-pale: #E8F5E9;
  --shadow-sm: 0 1px 3px rgba(13,43,85,0.08), 0 1px 2px rgba(13,43,85,0.04);
  --shadow-md: 0 4px 16px rgba(13,43,85,0.10), 0 2px 6px rgba(13,43,85,0.06);
  --shadow-lg: 0 12px 40px rgba(13,43,85,0.14);
}
```

---

## ✍️ Typography

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Merriweather:wght@700;900&display=swap" rel="stylesheet">
```

- **Display / Titles:** `Merriweather`, serif — weight 700/900
- **Body / UI:** `Inter`, sans-serif — weight 300/400/500/600/700/800
- **Body line-height:** 1.7
- **Body color:** `var(--gray-800)`
- **Background:** `var(--gray-100)`

---

## 📐 Layout Rules

- **Max content width:** 1100px
- **Section padding:** 88px 24px
- **Nav height:** 68px, fixed, white background
- **Card border-radius:** 16px
- **Button border-radius:** 8px
- **Card grid:** `repeat(auto-fill, minmax(300px, 1fr))`, gap 20px

---

## 🧩 Component Library

### NAV
```css
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 0 40px; height: 68px;
  display: flex; justify-content: space-between; align-items: center;
  background: #FFFFFF;
  border-bottom: 1px solid var(--gray-200);
  box-shadow: var(--shadow-sm);
}
```
- Logo: use transparent PNG with original colors (no filter needed on white bg)
- CTA button: `background: var(--blue)`, white text, border-radius 6px
- **IMPORTANT:** In footer, use styled HTML text instead of logo image:
```html
Financore <span style="color:var(--gold-light);">Solutions</span>
```

### HERO
```css
.hero {
  min-height: 100vh;
  background: linear-gradient(155deg, #0D2B55 0%, #1565C0 55%, #1E88E5 100%);
  padding: 120px 24px 80px;
}
```
- Title: Merriweather 900, white, `clamp(36px, 5.5vw, 68px)`
- Italic accent in title: `color: var(--gold-light)`
- Subtitle: Inter 300, `rgba(255,255,255,0.78)`, 18px
- Primary button: gold `#E8A020`, navy text
- Ghost button: `border: 2px solid rgba(255,255,255,0.35)`, white text
- Stats row: number in `var(--gold-light)`, label in `rgba(255,255,255,0.6)`

### SECTION LABEL (badge)
```css
.section-label {
  display: inline-block;
  background: var(--blue-pale); color: var(--blue);
  font-size: 11px; font-weight: 700;
  letter-spacing: 2.5px; text-transform: uppercase;
  padding: 5px 14px; border-radius: 100px;
  margin-bottom: 16px;
}
```

### DIVIDER ACCENT
```css
.divider-line {
  width: 56px; height: 4px;
  background: linear-gradient(to right, var(--blue), var(--gold));
  border-radius: 4px; margin-bottom: 24px;
}
```

### CARDS (Factors / Features)
```css
.card {
  background: white; border: 1px solid var(--gray-200);
  border-radius: 16px; padding: 32px 28px;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}
.card:hover {
  border-color: var(--blue-light);
  transform: translateY(-4px); box-shadow: var(--shadow-md);
}
/* Top accent bar on hover */
.card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(to right, var(--blue), var(--blue-light));
  opacity: 0; transition: opacity 0.25s;
}
.card:hover::before { opacity: 1; }
```

### TAGS
```css
/* Positive */
.tag-good { background: var(--green-pale); color: var(--green); }
/* Negative */
.tag-bad  { background: var(--red-pale);   color: var(--red); }
/* Both: */
font-size: 12px; font-weight: 600;
padding: 3px 10px; border-radius: 4px;
```

### PROBLEM BOX (alert)
```css
.problem-box {
  background: var(--red-pale);
  border: 1px solid rgba(211,47,47,0.15);
  border-left: 4px solid var(--red);
  border-radius: 12px; padding: 36px 44px;
}
```

### CREDIT UTILIZATION BARS
```css
.util-bar { height: 10px; background: var(--gray-200); border-radius: 100px; overflow: hidden; }
.fill-good { background: linear-gradient(to right, #2E7D32, #4CAF50); }
.fill-warn { background: linear-gradient(to right, #E65100, #FF9800); }
.fill-bad  { background: linear-gradient(to right, #B71C1C, #E53935); }
@keyframes fillBar { from { width: 0 !important; } }
```

### QUOTE SECTION
```css
.quote-section {
  background: linear-gradient(135deg, #0D2B55 0%, #1565C0 100%);
  padding: 80px 24px; text-align: center;
}
/* blockquote: Merriweather 700, white, em tag in gold-light */
```

### TIMELINE
```css
.timeline { position: relative; padding-left: 48px; }
.timeline::before {
  content: ''; position: absolute; left: 15px; top: 8px; bottom: 8px;
  width: 2px;
  background: linear-gradient(to bottom, var(--blue), var(--blue-light), transparent);
}
.timeline-dot {
  position: absolute; left: -41px; top: 5px;
  width: 16px; height: 16px; border-radius: 50%;
  background: var(--blue); border: 3px solid white;
  box-shadow: 0 0 0 2px var(--blue-light);
}
```

### CHECKLIST
```css
.check-icon.ok  { background: var(--green-pale); color: var(--green); }
.check-icon.bad { background: var(--red-pale);   color: var(--red); }
/* 22x22px circles, font-weight 700, font-size 11px */
```

### CTA SECTION
```css
.cta-section {
  background: var(--gold-pale);
  border-top: 1px solid rgba(232,160,32,0.2);
  padding: 88px 24px; text-align: center;
}
.btn-primary-dark {
  background: var(--navy); color: white;
  padding: 15px 34px; border-radius: 8px;
  font-weight: 700; font-size: 15px;
}
.btn-primary-dark:hover { background: var(--blue); transform: translateY(-2px); }
```

### FOOTER
```css
footer { background: var(--navy); color: rgba(255,255,255,0.7); padding: 56px 24px 36px; }
.footer-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 48px; }
.footer-col h4 { color: var(--gold-light); font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
.footer-col a:hover { color: var(--gold-light); }
.footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); font-size: 13px; color: rgba(255,255,255,0.35); }
```

---

## ✨ Animations

```css
/* IMPORTANT: Content must be visible by default — animate only when JS loads */
.reveal { opacity: 1; transform: translateY(0); transition: opacity 0.65s ease, transform 0.65s ease; }
.js-loaded .reveal { opacity: 0; transform: translateY(28px); }
.js-loaded .reveal.visible { opacity: 1; transform: translateY(0); }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

```js
document.body.classList.add('js-loaded');
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), (i % 4) * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));
```

---

## 📱 Responsive (768px breakpoint)

```css
@media (max-width: 768px) {
  nav { padding: 0 20px; }
  .nav-links { display: none; }
  .footer-inner { grid-template-columns: 1fr; gap: 32px; }
  .hero-stats { gap: 24px; }
  .hero-stat-divider { display: none; }
  .util-visual, .checklist-box, .problem-box { padding: 24px 20px; }
  .timeline { padding-left: 36px; }
}
```

---

## 📋 Standard Web Guide Structure (9 sections)

1. **NAV** — Logo (transparent PNG, colores originales) + links internos + botón "Contactar" → financoresolutions.com
2. **HERO** — Título impacto + subtítulo + stats (ej: "8 factores / $100K+ / 6 pasos") + 2 CTAs
3. **PROBLEMA** — Sección blanca, badge label, título Merriweather, caja roja de alerta
4. **FACTORES/CONTENIDO** — Grid gris-100, tarjetas blancas con número grande + título + cuerpo + tag
5. **VISUAL/DATOS** — Sección blanca, visualización de datos (barras, gráficos)
6. **QUOTE** — Frase de impacto sobre gradiente azul marino
7. **SISTEMA/PASOS** — Sección blanca, timeline vertical 6 pasos + checklist ✓/✕
8. **CTA FINAL** — Fondo dorado pálido, h2 navy, botón navy → financoresolutions.com
9. **FOOTER** — 3 columnas: Marca (texto HTML) / Contacto / Servicios

---

## ⚠️ Important Notes

- **Logo en nav:** usar PNG transparente con colores originales, NO aplicar filtros
- **Logo en footer:** usar texto HTML estilizado, NO imagen (queda mal sobre fondo oscuro)
  ```html
  Financore <span style="color:var(--gold-light);">Solutions</span>
  ```
- **Contenido siempre visible por defecto** — no usar `opacity:0` sin el patrón `js-loaded`
- **Todo el texto en español** — la marca comunica en español con su audiencia
- **Links externos** siempre con `target="_blank"`
- **Email siempre como mailto:** `<a href="mailto:info@financoresolutions.com">`

---
*Financore Solutions Brand Skill — Creado Marzo 2026*
