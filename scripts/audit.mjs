// Mobile + desktop UX audit screenshots.
import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'

const URL = process.env.URL ?? 'http://localhost:5173/vbarbershop/'
const OUT = 'screenshots'
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({ channel: 'msedge', headless: true })

async function section(page, id, name) {
  await page.evaluate((sel) => {
    document.querySelector(sel)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, id)
  await page.waitForTimeout(1200)
  await page.screenshot({ path: `${OUT}/${name}.png` })
}

// ── Mobile (iPhone 14-ish) ───────────────────────────────────────────
const m = await browser.newPage({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
})
m.on('pageerror', (e) => console.error('PAGE ERROR:', e.message))
await m.goto(URL, { waitUntil: 'networkidle' })
await m.waitForTimeout(1500)

await section(m, '#home', 'm-hero')
// burger closed (scrolled state)
await m.evaluate(() => window.scrollTo(0, 300))
await m.waitForTimeout(600)
await m.screenshot({ path: `${OUT}/m-nav-scrolled.png` })
// burger open
await m.click('.navbar__burger')
await m.waitForTimeout(700)
await m.screenshot({ path: `${OUT}/m-menu-open.png` })
await m.click('.navbar__burger')
await m.waitForTimeout(500)

await section(m, '#about', 'm-about')
await section(m, '#services', 'm-services')
await section(m, '#work', 'm-work')
await section(m, '#contact', 'm-contact')
// footer
await m.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await m.waitForTimeout(800)
await m.screenshot({ path: `${OUT}/m-footer.png` })

// lang bubble open
await m.click('.lang-bubble__toggle')
await m.waitForTimeout(500)
await m.screenshot({ path: `${OUT}/m-lang.png` })
await m.click('.lang-bubble__toggle')

// light theme hero + services
await m.click('.icon-btn[aria-label*="light"]')
await m.waitForTimeout(800)
await section(m, '#home', 'm-hero-light')
await section(m, '#about', 'm-about-light')

// ── Desktop light hero (reported issue) ──────────────────────────────
const d = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await d.goto(URL, { waitUntil: 'networkidle' })
await d.waitForTimeout(1200)
await d.click('.icon-btn[aria-label*="light"]')
await d.waitForTimeout(800)
await d.screenshot({ path: `${OUT}/d-hero-light.png` })

await browser.close()
console.log('done')
