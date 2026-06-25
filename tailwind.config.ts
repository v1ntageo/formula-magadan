import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '320': '320px',
        'xs': '363px',
        '800': '800px',
        '1035': '1035px',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#e30613',
          yellow: '#ffc107',
        },
      },
    },
  },
  plugins: [],
}

export default config