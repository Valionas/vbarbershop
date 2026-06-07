// Injects the server-rendered app HTML into dist/index.html after build.
// Run automatically as part of `npm run build`.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const { render } = await import(pathToFileURL('dist-ssr/entry-server.js').href)

const appHtml = render()
if (!appHtml || appHtml.length < 1000) {
  throw new Error(`Prerender produced suspiciously little HTML (${appHtml?.length ?? 0} chars)`)
}

const template = readFileSync('dist/index.html', 'utf8')
const marker = '<div id="root"></div>'
if (!template.includes(marker)) {
  throw new Error('Could not find the #root marker in dist/index.html')
}

writeFileSync('dist/index.html', template.replace(marker, `<div id="root">${appHtml}</div>`))
rmSync('dist-ssr', { recursive: true, force: true })
console.log(`prerendered dist/index.html (+${(appHtml.length / 1024).toFixed(1)} kB of static HTML)`)
