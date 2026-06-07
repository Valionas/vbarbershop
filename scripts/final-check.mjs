// Verify: hydration (no errors), short-viewport hero fix, glass design.
import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'

const URL = process.env.URL ?? 'http://localhost:4173/vbarbershop/'
mkdirSync('screenshots', { recursive: true })

const browser = await chromium.launch({ channel: 'msedge', headless: true })

// 1. Hydration check on the production build
const errors = []
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
page.on('pageerror', (e) => errors.push(e.message))
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text())
})
await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)
// interact: theme toggle + lang switch still work after hydration
await page.click('.icon-btn[aria-label*="light"]')
await page.waitForTimeout(500)
await page.click('.icon-btn[aria-label*="dark"]')
await page.waitForTimeout(500)
console.log('console/page errors after hydration + interaction:', errors.length ? errors : 'none')

// 2. Glass design screenshots
await page.evaluate(() => document.querySelector('#services').scrollIntoView({ behavior: 'instant' }))
await page.waitForTimeout(1300)
await page.screenshot({ path: 'screenshots/glass-services.png' })
await page.evaluate(() => document.querySelector('#contact').scrollIntoView({ behavior: 'instant' }))
await page.waitForTimeout(1300)
await page.screenshot({ path: 'screenshots/glass-contact.png' })
await page.close()

// 3. Short mobile viewport (the reported overlap): 320x568 and 390x700
for (const [w, h] of [[320, 568], [390, 700]]) {
  const m = await browser.newPage({ viewport: { width: w, height: h }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 })
  await m.goto(URL, { waitUntil: 'networkidle' })
  await m.waitForTimeout(1200)
  await m.screenshot({ path: `screenshots/short-${w}x${h}.png` })
  await m.close()
}

await browser.close()
console.log('done')
