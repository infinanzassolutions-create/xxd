---
name: frontend-design
description: Design system and taste rules for building UI in this project. Use whenever creating or editing pages, sections, components, or styles.
---

# Frontend design rules

Every UI change follows these rules. If a request conflicts with them, say so before deviating.

## Type scale

Use only these sizes (rem, 1rem = 16px). Never invent in-between values.

| Token | Size | Use |
| --- | --- | --- |
| `--text-xs` | 0.75 | Labels, table meta |
| `--text-sm` | 0.875 | Captions, secondary copy |
| `--text-base` | 1 | Body |
| `--text-lg` | 1.25 | Lead paragraphs, card titles |
| `--text-xl` | 1.75 | Section titles (mobile) |
| `--text-2xl` | 2.5 | Section titles (desktop) |
| `--text-3xl` | clamp(2.75rem, 7vw, 5.5rem) | Hero headline only |

- Display font for headlines, one text font for everything else. Maximum two families.
- Body line-height 1.6; headlines 1.05–1.15 with slight negative tracking.
- Line length 60–75 characters for running text.

## Spacing

8px base grid. Allowed steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Section padding is 96px on desktop and 64px on mobile. Side gutter is never below 16px.

## Color tokens

Define every color as a CSS custom property on `:root` and redefine it for dark mode. No raw hex values inside components.

- `--bg`, `--surface`, `--surface-2`: page and raised surfaces
- `--text`, `--text-muted`: body and secondary text (muted still passes 4.5:1 contrast)
- `--border`: hairlines, 1px
- `--accent`, `--accent-ink`: one brand accent and the text color that sits on it

One accent color. Neutrals do the rest of the work.

## Components

- **Buttons:** primary (filled accent) and secondary (outlined). Include hover, focus-visible (2px outline with offset), active, and disabled states. Min height 44px.
- **Cards:** 1px border, radius 16px, padding 24–32px, no drop shadow unless it is elevated on hover.
- **Code blocks:** monospace, surface-2 background, a copy button, horizontal scroll inside the block and never on the page.
- **Tables:** left-aligned text, right-aligned numbers, hairline row dividers, and a horizontal scroll wrapper on mobile.

## Motion

- Entrance: fade plus an 16–24px translate, 500–700ms, ease-out, staggered 60–90ms between siblings.
- Hover: 150–200ms. Never animate layout-shifting properties; use transform and opacity.
- Respect `prefers-reduced-motion`: disable translates and stagger.

## Avoid the generic AI look

- No purple-to-blue gradients, glassmorphism cards, or emoji as icons.
- No three identical centered cards with an icon on top as the default layout. Vary rhythm: asymmetric grids, numbered steps, and editorial type.
- No "Unlock", "Elevate", "Seamless", or "Supercharge" in copy. Write plainly.
- Real content before decoration. Placeholder text never ships.

## Performance

Lazy-load below-the-fold images, preconnect and `display=swap` web fonts, and keep the Lighthouse performance score at 90 or higher.
