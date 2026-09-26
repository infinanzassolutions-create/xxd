# Instalar el stack en tu computadora

Un solo comando instala todo lo de la guía y te deja un proyecto listo para diseñar webs con Claude Code:

| Paso de la guía | Qué instala el comando |
| --- | --- |
| 1 · Claude Code | Claude Code (si no lo tienes ya) |
| 2 · Animaciones | Proyecto Next.js + Tailwind con **Motion** |
| 3 · Skill de diseño | `frontend-design`, `estilo-financore` y `financore-brand` en `.claude/skills/`, más instrucciones en `CLAUDE.md` |
| 4 · 21st.dev | Instrucciones para que Claude adapte los componentes que le pegues |

## Antes de empezar

Instala **Node.js LTS** (versión 20.9 o más nueva) desde https://nodejs.org. Con eso basta.

## Mac o Linux

Abre la app **Terminal**, ve a la carpeta donde quieres guardar tus webs y pega:

```bash
curl -fsSL https://raw.githubusercontent.com/infinanzassolutions-create/xxd/HEAD/starter/setup.sh | bash -s mi-web
```

## Windows

Abre **PowerShell**, ve a la carpeta donde quieres guardar tus webs y pega:

```powershell
& ([scriptblock]::Create((irm https://raw.githubusercontent.com/infinanzassolutions-create/xxd/HEAD/starter/setup.ps1))) mi-web
```

Cambia `mi-web` por el nombre que quieras para tu proyecto. Tarda unos minutos.

## Después de instalar

1. Entra a la carpeta: `cd mi-web`
2. Arranca la vista previa: `npm run dev` y abre http://localhost:3000
3. En **otra** ventana de terminal, dentro de la misma carpeta, abre Claude Code: `claude`
   La primera vez te pedirá iniciar sesión con tu cuenta de Claude.
4. Pega uno de los prompts de `PROMPT-INICIAL.md` y ve revisando sección por sección en el navegador.
5. Cuando quieras un componente más elaborado, búscalo en https://21st.dev, copia su código o su comando de instalación y pídele a Claude que lo integre.

## Para cada web nueva

Vuelve a correr el comando con otro nombre (`... | bash -s otra-web`). Cada proyecto trae sus propias skills, así que puedes ajustar una sin afectar las demás.

## Si algo falla

- **"No tienes Node.js" o versión vieja:** instala la versión LTS de nodejs.org, cierra y abre la terminal, y repite.
- **"claude: command not found" justo después de instalar:** cierra y abre la terminal.
- **"Ya existe una carpeta":** usa otro nombre de proyecto.
