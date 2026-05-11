/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          50:  '#eff3fa',
          100: '#dee6f1',
          200: '#bbcce0',
          300: '#869cc0',
          400: '#576f9a',
          500: '#3a5079',
          600: '#2a3e62',
          700: '#1e2e4a',
          800: '#152139',
          900: '#0e1929',
          950: '#070d18',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.08)',
        'soft-lg': '0 2px 4px rgba(0,0,0,0.04), 0 12px 32px -12px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
