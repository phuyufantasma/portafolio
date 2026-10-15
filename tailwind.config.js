/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        phuyu: {
          dark: '#11120f',
          charcoal: '#171813',
          stone: '#24272a',
          earth: '#3d342d',
          clay: '#9c442b',
          moss: '#324035',
          fog: '#e7dfcd',
          mist: '#aca797',
        }
      },
      fontFamily: {
        editorial: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['DM Mono', 'Courier New', 'monospace'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fog-flow': 'fog 25s ease-in-out infinite alternate',
      },
      keyframes: {
        fog: {
          '0%': { transform: 'translateX(-5%) translateY(-2%) scale(1)' },
          '100%': { transform: 'translateX(5%) translateY(2%) scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
