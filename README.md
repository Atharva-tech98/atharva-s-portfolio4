# Portfolio Site - Atharva Naikodi

A futuristic, high-personality portfolio website for Atharva Sanjay Naikodi — a B.Tech Mechanical Engineering student specializing in Robotics, AI, and Automotive Systems.

## Tech Stack
- **Next.js 15** (App Router) with TypeScript
- **Tailwind CSS 3** + custom neon/glass design system
- **Inter + Fira Code** fonts from Google Fonts
- **Framer Motion** for entrance animations
- Dark-mode only (auto via `next-themes`)

## Quick Start
```bash
npm install        # installs all dependencies
npm run dev        # starts the dev server at http://localhost:3000
```

## Structure
| File | Description |
|------|-------------|
| `src/app/layout.tsx` | Root layout, wraps `<ThemeProvider>` |
| `src/app/page.tsx` | Home page (Hero → About → Skills → Projects → Contact) |
| `src/components/home/hero-section.tsx` | Animated hero section with gradient glow |
| `src/components/home/contact-section.tsx` | Contact info + form |
| `src/components/home/contact-form.tsx` | Client-side form that emails to atharvanaikodi1@gmail.com |
| `src/components/about-section.tsx` | About you (animated reveal) |
| `src/components/skills-section.tsx` | Skills grid |
| `src/components/projects-section.tsx` | Projects showcase |
| `src/components/footer-section.tsx` | Footer |
| `src/components/mobile-nav.tsx` | Hamburger menu (mobile) |

## Deploy
Easiest free path: Vercel (no build needed). Just push the folder and connect your GitHub repo — it auto-deploys on commit.

Alternatively run `npm run build && npm start` and host any static file server.
