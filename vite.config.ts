import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
      }
    }
  },
  // ✅ BARU: HTTP Security Headers untuk dev server
  // Untuk production (Vercel), header ini juga perlu ditambahkan di vercel.json
  server: {
    headers: {
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
    }
  }
})