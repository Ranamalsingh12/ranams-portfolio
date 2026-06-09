# Rana Mal Singh Portfolio

A premium, dark-first portfolio built with Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion, GSAP, and shadcn-style UI primitives.

## Getting started

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Environment

Create a local `.env.local` from `.env.example` and set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This powers canonical metadata, sitemap URLs, and Open Graph links.

## Content sources

- Portfolio copy and experience are in `lib/data.ts`
- Resume download file is in `public/resume/rana-mal-singh-resume.pdf`
- Homepage sections live under `components/sections`
- Project case-study routes live under `app/projects/[slug]`
