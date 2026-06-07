// Screenshot the upgraded contact cards (desktop + mobile, both themes).
import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'

const URL = process.env.URL ?? 'http://localhost:4173/vbarbershop/'
mkdirSync('screenshots', { recursive: true })

const browser = await chromium.launch({ channel: 'msedge', headless: true })

const errors = []
const page = await browser.newPage({ viewport: { width: 1440, height: 950 } })
page.on('pageerror', (e) => errors.push(e.message))
await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(1000)
await page.evaluate(() => document.querySelector('#contact').scrollIntoView({ behavior: 'instant' }))
await page.waitForTimeout(2000)
await page.screenshot({ path: 'screenshots/contact-new-dark.png' })

await page.click('.icon-btn[aria-label*="light"]')
await page.waitForTimeout(900)
await page.screenshot({ path: 'screenshots/contact-new-light.png' })
console.log('errors:', errors.length ? errors : 'none')
await page.close()

const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 })
await m.goto(URL, { waitUntil: 'networkidle' })
await m.waitForTimeout(1000)
await m.evaluate(() => document.querySelector('#contact').scrollIntoView({ behavior: 'instant' }))
await m.waitForTimeout(1500)
await m.screenshot({ path: 'screenshots/contact-new-mobile.png' })
await m.close()

await browser.close()
console.log('done')
