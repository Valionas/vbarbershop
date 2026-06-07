// Build-time prerender entry: renders the app to static HTML so crawlers
// (and users on slow connections) get full content before JS loads.
import { renderToString } from 'react-dom/server'
import App from './App'

export function render(): string {
  return renderToString(<App />)
}
