// Verify SEO meta, structured data, scrollspy, skip link and i18n meta sync.
import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'

const URL = process.env.URL ?? 'http://localhost:5173/vbarbershop/'
mkdirSync('screenshots', { recursive: true })

const browser = await chromium.launch({ channel: 'msedge', headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
page.on('pageerror', (e) => console.error('PAGE ERROR:', e.message))

await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(1000)

// 1. Meta + JSON-LD present
const checks = await page.evaluate(() => {
  const q = (s) => document.querySelector(s)
  const ld = q('script[type="application/ld+json"]')
  let ldType = null
  try {
    ldType = JSON.parse(ld?.textContent ?? '{}')['@type']
  } catch {}
  return {
    title: document.title,
    description: q('meta[name="description"]')?.content?.slice(0, 60),
    canonical: q('link[rel="canonical"]')?.href,
    ogImage: q('meta[property="og:image"]')?.content,
    twitterCard: q('meta[name="twitter:card"]')?.content,
    manifest: q('link[rel="manifest"]')?.href,
    appleIcon: q('link[rel="apple-touch-icon"]')?.href,
    preloadHero: !!q('link[rel="preload"][as="image"]'),
    jsonLdType: ldType,
    htmlLang: document.documentElement.lang,
  }
})
console.log(JSON.stringify(checks, null, 2))

// 2. Language switch updates title/description/lang
await page.click('.lang-bubble__toggle')
await page.waitForTimeout(400)
await page.click('.lang-bubble__option:nth-child(2) button') // Bulgarian
await page.waitForTimeout(500)
const bgMeta = await page.evaluate(() => ({
  lang: document.documentElement.lang,
  title: document.title,
}))
console.log('after switch to BG:', JSON.stringify(bgMeta))

// 3. Scrollspy: scroll to services, check active link
await page.evaluate(() => document.querySelector('#services').scrollIntoView({ behavior: 'instant' }))
await page.waitForTimeout(800)
const activeLink = await page.evaluate(
  () => document.querySelector('.navbar__links a.is-active')?.getAttribute('href'),
)
console.log('active nav link at #services:', activeLink)
await page.screenshot({ path: 'screenshots/scrollspy.png' })

// 4. Skip link appears on keyboard focus
await page.evaluate(() => {
  window.scrollTo(0, 0)
  document.querySelector('.skip-link')?.focus()
})
await page.waitForTimeout(500)
const focused = await page.evaluate(() => document.activeElement?.className)
console.log('skip link focused:', focused)
await page.screenshot({ path: 'screenshots/skip-link.png' })

await browser.close()
console.log('done')
