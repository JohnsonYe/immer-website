import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors from pitch deck
        'immer-navy': '#1e3a8a',
        'immer-orange': '#f97316',
        'immer-dark': '#0f172a',
        // Secondary colors
        'immer-blue': '#3b82f6',
        'immer-purple': '#8b5cf6',
        'immer-cyan': '#06b6d4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
