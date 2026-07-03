# Abraham Gbadamosi — Creative Portfolio

A portfolio site for Abraham Gbadamosi (Ocenstar Artworks), abstract artist and
graphic designer based in Lagos, Nigeria. Rebuilt from the original Canva site
as a fast, responsive Next.js app.

## Stack

- Next.js (App Router) + React
- Tailwind CSS v4
- next/font (Anton display + Archivo body)
- Static prerender — no server data, deploys anywhere

## Develop

```bash
npm install
npm run dev
```

Requires Node.js 20.9+ (built against Node 22).

## Build

```bash
npm run build
npm start
```

## Content

All portfolio content lives in `lib/content.ts` — work items, experience,
education, and contact details. Gallery images live in `public/work/` as
optimized webp (max 1600px long edge).

To add a piece: drop the image in `public/work/`, then add an entry to `works`
in `lib/content.ts` with its pixel dimensions and a category of `artwork` or
`client`.
