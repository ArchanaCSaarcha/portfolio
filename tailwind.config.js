/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#090d12',
          900: '#0d131a',
          850: '#121922',
          800: '#17212c',
          750: '#1d2a38',
          700: '#263647',
          600: '#384d64',
        },
        sage: {
          50: '#f2f7f4',
          100: '#e3ece6',
          200: '#c7dacd',
          300: '#a5c2ad',
          400: '#84a98c',
          500: '#678f70',
          600: '#517359',
          700: '#415b47',
          800: '#36493b',
          900: '#2e3d32',
          950: '#17221a',
        },
        limeacc: {
          400: '#a3e635',
          500: '#84cc16',
        }
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-sage': '0 0 25px -5px rgba(132, 169, 140, 0.25)',
        'glow-subtle': '0 0 40px -10px rgba(132, 169, 140, 0.12)',
      },
    },
  },
  plugins: [],
}
