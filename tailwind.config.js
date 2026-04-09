/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#f5d78e',
          400: '#f0c040',
          500: '#d4af37',
          600: '#b8960c',
        },
        luxury: {
          black: '#0a0a0a',
          dark: '#111111',
          card: '#161616',
          border: '#2a2a2a',
          green: '#1a2e1a',
          'deep-green': '#0f1f0f',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37, #f0c040, #d4af37)',
        'dark-gradient': 'linear-gradient(135deg, #0a0a0a, #161616)',
      }
    },
  },
  plugins: [],
}
