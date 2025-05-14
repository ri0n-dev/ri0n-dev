import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const colors = require('tailwindcss/colors')
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: colors.neutral,
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
}

export default config