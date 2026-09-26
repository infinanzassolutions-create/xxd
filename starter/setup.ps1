# Instala el stack de la guía y crea un proyecto listo para diseñar con Claude Code (Windows).
# Uso en PowerShell:
#   & ([scriptblock]::Create((irm https://raw.githubusercontent.com/infinanzassolutions-create/xxd/HEAD/starter/setup.ps1))) mi-web
param([string]$Name = "mi-web")
$ErrorActionPreference = "Stop"

$Base = "https://raw.githubusercontent.com/infinanzassolutions-create/xxd/HEAD/starter/template"
$Files = @(
  ".claude/skills/frontend-design/SKILL.md",
  ".claude/skills/financore-brand/SKILL.md",
  ".claude/skills/estilo-financore/SKILL.md",
  "CLAUDE-extra.md",
  "PROMPT-INICIAL.md"
)

function Step($msg) { Write-Host "`n==> $msg" -ForegroundColor Cyan }
function Fail($msg) { Write-Host "`nX $msg" -ForegroundColor Red; exit 1 }

# 1. Node.js 20.9+
Step "Revisando Node.js"
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Fail "No tienes Node.js. Instala la versión LTS desde https://nodejs.org, cierra y abre PowerShell, y vuelve a correr este comando."
}
$v = [version]((node -v).TrimStart("v"))
if ($v -lt [version]"20.9.0") { Fail "Tienes Node $v. Next.js necesita 20.9 o más nuevo: instala la versión LTS desde https://nodejs.org" }
Write-Host "Node $v OK"

# 2. Claude Code
Step "Paso 1 - Claude Code"
if (Get-Command claude -ErrorAction SilentlyContinue) {
  Write-Host "Claude Code ya está instalado OK"
} else {
  irm https://claude.ai/install.ps1 | iex
  $env:Path = "$env:USERPROFILE\.local\bin;$env:Path"
}

# 3. Proyecto Next.js + Tailwind
Step "Creando el proyecto `"$Name`" (Next.js + Tailwind)"
if (Test-Path $Name) { Fail "Ya existe una carpeta llamada `"$Name`". Elige otro nombre." }
npx -y create-next-app@latest $Name --ts --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --yes
if ($LASTEXITCODE -ne 0) { Fail "No se pudo crear el proyecto." }
Set-Location $Name

# 4. Motion
Step "Paso 2 - Animaciones (Motion)"
npm install motion
if ($LASTEXITCODE -ne 0) { Fail "No se pudo instalar Motion." }

# 5. Skills de diseño + instrucciones para Claude
Step "Paso 3 - Skills de diseño"
foreach ($f in $Files) {
  $dir = Split-Path $f -Parent
  if ($dir) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  Invoke-WebRequest -UseBasicParsing "$Base/$f" -OutFile $f
}
Get-Content CLAUDE-extra.md -Encoding UTF8 | Add-Content CLAUDE.md -Encoding UTF8
Remove-Item CLAUDE-extra.md
Write-Host "Skills instaladas en .claude/skills: frontend-design, estilo-financore, financore-brand OK"

try { git add -A 2>$null; git commit -qm "Stack inicial: Next.js, Tailwind, Motion y skills de diseño" 2>$null } catch {}

Step "¡Listo!"
Write-Host @"

Tu proyecto está en: $(Get-Location)

Siguientes pasos:
  1. cd $Name
  2. npm run dev          -> abre http://localhost:3000 para ver la web
  3. En otra ventana de PowerShell, dentro de la misma carpeta:  claude
  4. Pega un prompt de PROMPT-INICIAL.md
  5. Paso 4 - Busca componentes en https://21st.dev y pídele a Claude que los integre

"@
