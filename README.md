# V Barbershop

A modern, whitelabel-ready barbershop landing page.
**Live:** https://valionas.github.io/vbarbershop/

Built with Vite + React + TypeScript. Design informed by award-winning barbershop sites
(Hagi's Barber Shop, Blind Barber, Fellow Barber, Schorem, Murdock London …):
espresso/cream/brass palette, editorial serif typography, scroll reveals, marquee strip,
parallax hero, soft depth via lighting rather than hard shadows.

## Features

- 🌗 **Dark / light mode** — toggle in the navbar, persisted, no flash on load
- 🌍 **5 languages** — EN · BG · DE · FR · ES via the floating bubble (bottom-right), persisted + browser auto-detect
- 📱 Fully responsive (mobile slide-in menu)
- ♿ Reduced-motion friendly, semantic markup
- 🚀 Auto-deploys to GitHub Pages on every push to `main`

## Whitelabel guide

The entire brand lives in **three files** — rebranding is a few small edits (or one prompt to an AI assistant):

| File | What it controls |
|---|---|
| `src/config/brand.ts` | Name, logo mark, phone, email, address, socials, opening hours, stats, prices, **all images** |
| `src/index.css` (top `:root` blocks) | Colors for both themes, fonts, radius, shadows |
| `src/i18n/translations.ts` | All marketing copy in all 5 languages |

Example prompts that fully rebrand the site:

> "Rebrand to 'Lion's Den Barbers' in Berlin: update brand.ts with these contacts …, switch the accent color to oxblood `#7b1e2b`."

> "Add Italian as a 6th language."

Also update `index.html` (title/description) and `public/favicon.svg` for a complete rebrand.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages (source: GitHub Actions).

### Attaching a custom domain later (e.g. vbarbershop.io)

1. Buy the domain and add a `CNAME` file containing `vbarbershop.io` to `public/`.
2. Change `base` in `vite.config.ts` from `'/vbarbershop/'` to `'/'`.
3. In the repo: **Settings → Pages → Custom domain** → enter the domain.
4. At your DNS provider: `A` records for the apex to GitHub Pages IPs
   (`185.199.108.153`, `.109.`, `.110.`, `.111.`) and a `CNAME` record for `www` → `valionas.github.io`.
