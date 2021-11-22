import { defineConfig } from 'vite-plugin-windicss'

import colors from 'windicss/colors'
import forms from 'windicss/plugin/forms'
import aspect_ratio from 'windicss/plugin/aspect-ratio'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  extract: {
    include: [
      'app/**/*.{vue,erb,js,jsx,tsx,rb}'

      // './app/**/*.html.erb',
      // './app/helpers/**/*.rb',
      // './app/components/**/*.html.erb',
      // './app/components/**/*.rb',
      // './app/assets/**/*.js'
    ]
  },
  safelist: [
    // Alerts
    'bg-alert-100 text-alert-700',
    'bg-error-100 text-error-700',
    'bg-success-100 text-success-700',
    'bg-warning-100 text-warning-700',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#739423",
          DEFAULT: "#1d3e97",
          dark: "#2c5282"
        },
        alert: colors.red,
        error: colors.red,
        success: colors.emerald,
        warning: colors.amber
      }
    },
  },
  plugins: [
    forms,
    aspect_ratio,
    typography
  ]
})
