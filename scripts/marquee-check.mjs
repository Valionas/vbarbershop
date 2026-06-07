// Verify the marquee animates, including under prefers-reduced-motion.
import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'

const URL = process.env.URL ?? 'http://localhost:5173/vbarbershop/'
mkdirSync('screenshots', { recursive: true })

const browser = await chromium.launch({ channel: 'msedge', headless: true })

async function check(name, reducedMotion) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion })
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)
  const el = page.locator('.marquee')
  const x1 = await page.evaluate(
    () => new DOMMatrix(getComputedStyle(document.querySelector('.marquee__track')).transform).m41,
  )
  await el.screenshot({ path: `screenshots/${name}-t1.png` })
  await page.waitForTimeout(3000)
  const x2 = await page.evaluate(
    () => new DOMMatrix(getComputedStyle(document.querySelector('.marquee__track')).transform).m41,
  )
  await el.screenshot({ path: `screenshots/${name}-t2.png` })
  console.log(`${name}: x ${x1.toFixed(1)} -> ${x2.toFixed(1)} (moved ${Math.abs(x2 - x1).toFixed(1)}px)`)
  await page.close()
}

await check('marquee-normal', 'no-preference')
await check('marquee-reduced', 'reduce')
await browser.close()
