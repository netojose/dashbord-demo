import * as path from 'path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setup-tests.js',
    reporters: ['verbose'],
    coverage: {
      provider: 'v8',
      include: ['src/components/**/*.{ts,tsx}']
    }
  },
  resolve: {
    alias: {
      '@/styled-system': path.resolve(__dirname, 'styled-system'),
      '@': path.resolve(__dirname, 'src')
    }
  }
})
