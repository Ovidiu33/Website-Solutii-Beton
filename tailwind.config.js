/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00',
          dark: '#CC5500',
          light: '#FF8533',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          lighter: '#2a2a2a',
          darker: '#0a0a0a',
        },
        gray: {
          DEFAULT: '#808080',
          light: '#b3b3b3',
          dark: '#4d4d4d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateX(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
