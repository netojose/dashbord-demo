import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

import { removeUnusedCssVars } from './bundling-utils/remove-unused-css-vars'
import { removeUnusedKeyframes } from './bundling-utils/remove-unused-keyframes'
import { Status } from './src/types'

const globalCss = defineGlobalStyles({
  'body, #root': {
    bg: 'gray.100',
    h: '100vh'
  }
})

export default defineConfig({
  hash: true,

  globalCss,

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          background: { value: '#f3f4f6' },
          foreground: { value: '#ffffff' },
          text: {
            100: { value: '#53595f' },
            200: { value: '#42474c' },
            300: { value: '#313539' }
          },
          success: { value: '#198754' },
          warning: { value: '#ffc107' },
          danger: { value: '#dc3545' },
          kycStatus: {
            [Status.APPROVED]: { value: '#8bc24b' },
            [Status.CANCELLED]: { value: '#ff5622' },
            [Status.PROCESSING]: { value: '#00a8f4' },
            [Status.READY]: { value: '#f5f502' },
            [Status.REJECTED]: { value: '#ff9800' }
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system',

  hooks: {
    'cssgen:done': ({ artifact, content }) => {
      if (artifact === 'styles.css') {
        return removeUnusedCssVars(removeUnusedKeyframes(content))
      }
    }
  }
})
