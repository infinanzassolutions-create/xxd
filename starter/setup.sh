#!/usr/bin/env bash
# Instala el stack de la guía y crea un proyecto listo para diseñar con Claude Code.
# Uso:  curl -fsSL https://raw.githubusercontent.com/infinanzassolutions-create/xxd/HEAD/starter/setup.sh | bash -s mi-web
set -euo pipefail

NAME="${1:-mi-web}"
BASE="https://raw.githubusercontent.com/infinanzassolutions-create/xxd/HEAD/starter/template"
FILES=(
  ".claude/skills/frontend-design/SKILL.md"
  ".claude/skills/financore-brand/SKILL.md"
  ".claude/skills/estilo-financore/SKILL.md"
  "CLAUDE-extra.md"
  "PROMPT-INICIAL.md"
)

step() { printf '\n\033[1;34m==> %s\033[0m\n' "$1"; }
fail() { printf '\n\033[1;31m✕ %s\033[0m\n' "$1"; exit 1; }

# 1. Node.js 20.9+
step "Revisando Node.js"
command -v node >/dev/null || fail "No tienes Node.js. Instala la versión LTS desde https://nodejs.org y vuelve a correr este comando."
NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
NODE_MINOR="$(node -p 'process.versions.node.split(".")[1]')"
if [ "$NODE_MAJOR" -lt 20 ] || { [ "$NODE_MAJOR" -eq 20 ] && [ "$NODE_MINOR" -lt 9 ]; }; then
  fail "Tienes Node $(node -v). Next.js necesita 20.9 o más nuevo: instala la versión LTS desde https://nodejs.org"
fi
echo "Node $(node -v) ✓"

# 2. Claude Code
step "Paso 1 · Claude Code"
if command -v claude >/dev/null; then
  echo "Claude Code ya está instalado ✓"
else
  curl -fsSL https://claude.ai/install.sh | bash
  export PATH="$HOME/.local/bin:$PATH"
fi

# 3. Proyecto Next.js + Tailwind
step "Creando el proyecto \"$NAME\" (Next.js + Tailwind)"
[ -e "$NAME" ] && fail "Ya existe una carpeta llamada \"$NAME\". Elige otro nombre: ... | bash -s otro-nombre"
npx -y create-next-app@latest "$NAME" --ts --tailwind --eslint --app --no-src-dir \
  --import-alias "@/*" --use-npm --yes < /dev/null
cd "$NAME"

# 4. Motion
step "Paso 2 · Animaciones (Motion)"
npm install motion

# 5. Skills de diseño + instrucciones para Claude
step "Paso 3 · Skills de diseño"
for f in "${FILES[@]}"; do
  mkdir -p "$(dirname "$f")"
  if [ -n "${FC_LOCAL_TEMPLATE:-}" ]; then
    cp "$FC_LOCAL_TEMPLATE/$f" "$f"
  else
    curl -fsSL "$BASE/$f" -o "$f"
  fi
done
cat CLAUDE-extra.md >> CLAUDE.md && rm CLAUDE-extra.md
echo "Skills instaladas en .claude/skills: frontend-design, estilo-financore, financore-brand ✓"

git add -A >/dev/null 2>&1 && git commit -qm "Stack inicial: Next.js, Tailwind, Motion y skills de diseño" >/dev/null 2>&1 || true

step "¡Listo!"
cat <<EOF

Tu proyecto está en: $(pwd)

Siguientes pasos:
  1. cd $NAME
  2. npm run dev          → abre http://localhost:3000 para ver la web
  3. En otra terminal, dentro de la misma carpeta:  claude
  4. Pega un prompt de PROMPT-INICIAL.md
  5. Paso 4 · Busca componentes en https://21st.dev y pídele a Claude que los integre

EOF
