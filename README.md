# iRWA (Next.js + Tailwind)

This project is a **Next.js (App Router) + Tailwind CSS** conversion of your FigmaMake/Vite export so you can work on it cleanly in **VS Code**.

## 1) Open in VS Code
1. Unzip the project.
2. Open VS Code → **File → Open Folder…** → select the project folder (`irwa-next`).

## 2) Install + run
In VS Code terminal:

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:3000`).

## Project structure
- `app/page.tsx` — main page
- `app/components/ResponsiveBackground.tsx` — the full landing page component (client component)
- `public/assets/` — images copied from the export
- `app/styles/` — Tailwind v4 + theme CSS

## Notes about the conversion
- All `figma:asset/...` imports were replaced with `/public/assets/...` paths.
- Images are rendered using `next/image` for better performance.
- The component is marked `use client` because it uses React hooks + Motion.

