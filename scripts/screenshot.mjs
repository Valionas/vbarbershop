// Dev-only visual check: screenshots each section in dark + light mode.
import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'

const URL = process.env.URL ?? 'http://localhost:5173/vbarbershop/'
const OUT = 'screenshots'
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({ channel: 'msedge', headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
page.on('pageerror', (e) => console.error('PAGE ERROR:', e.message))

await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

async function shoot(id, name) {
  await page.evaluate((sel) => {
    document.querySelector(sel)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, id)
  await page.waitForTimeout(1300) // let reveal transitions finish
  await page.screenshot({ path: `${OUT}/${name}.png` })
}

await shoot('#home', 'hero-dark')
await shoot('#about', 'about-dark')
await shoot('#services', 'services-dark')
await shoot('#work', 'work-dark')
await shoot('#contact', 'contact-dark')

// Language bubble open
await page.click('.lang-bubble__toggle')
await page.waitForTimeout(500)
await page.screenshot({ path: `${OUT}/lang-bubble.png` })
await page.mouse.click(400, 300)
await page.waitForTimeout(300)

// Light mode
await page.click('.icon-btn[aria-label*="light"]')
await page.waitForTimeout(900)
await shoot('#home', 'hero-light')
await shoot('#services', 'services-light')
await shoot('#contact', 'contact-light')

await browser.close()
console.log('done')
