// Screenshot the gallery bento grid at desktop / tablet / mobile widths.
import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'

const URL = process.env.URL ?? 'http://localhost:5173/vbarbershop/'
mkdirSync('screenshots', { recursive: true })

const browser = await chromium.launch({ channel: 'msedge', headless: true })

for (const [name, w, h] of [
  ['bento-desktop', 1440, 1100],
  ['bento-tablet', 820, 1100],
  ['bento-mobile', 390, 844],
]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } })
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(900)
  await page.evaluate(() => document.querySelector('#work').scrollIntoView({ behavior: 'instant' }))
  await page.waitForTimeout(1400)
  await page.locator('.gallery__grid').screenshot({ path: `screenshots/${name}.png` })
  await page.close()
}

await browser.close()
console.log('done')
