# Build a $10K Website in Claude Code — Setup Guide

A single-page website presenting the 4-step setup: Claude Code, Motion (formerly Framer Motion), a frontend design skill, and 21st.dev components.

- `index.html` — the site. Static, no build step: open it in a browser or host it on any static host (GitHub Pages, Netlify, Vercel).
- `.claude/skills/frontend-design/SKILL.md` — the design skill from Step 3, ready to use. Claude Code picks it up automatically in this repo.

Preview locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Financore Solutions site (`web/`)

A landing page built with the guide's stack: Next.js (App Router), Tailwind CSS, Motion, and the Financore brand system.

```bash
cd web
npm install
npm run dev            # http://localhost:3000/xxd/financore
npm run publish-site   # static export copied to ../financore for GitHub Pages
```

Published at `/xxd/financore/` once GitHub Pages is enabled for this branch. `.nojekyll` keeps Pages from dropping the `_next` folder.
