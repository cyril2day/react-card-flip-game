import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const pagesBase = '/react-card-flip-game/'

// Fixes root-absolute runtime asset paths (like '/sounds/flip.wav' used in
// components) so they point to this app's GitHub Pages subpath in production.
// Source files keep their original paths untouched.
function fixRuntimeAssetPaths() {
  return {
    name: 'fix-runtime-asset-paths',
    renderChunk(code) {
      if (!code.includes('/sounds/')) return
      return {
        code: code
          .replaceAll('"/sounds/', `"${pagesBase}sounds/`)
          .replaceAll("'/sounds/", `'${pagesBase}sounds/`),
        map: null,
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? pagesBase : '/',
  plugins: [tailwindcss(), react(), fixRuntimeAssetPaths()],
})