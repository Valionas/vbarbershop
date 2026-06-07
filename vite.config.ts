import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from https://valionas.github.io/vbarbershop/
  // If you later attach a custom domain (e.g. vbarbershop.io), change this to '/'.
  base: '/vbarbershop/',
})
