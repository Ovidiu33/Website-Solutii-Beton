/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: { raw: '(max-width: 767px) and (orientation: portrait)' },
        'phone-short': { raw: '(max-width: 767px) and (orientation: portrait) and (max-height: 620px)' },
        short: { raw: '(max-height: 500px) and (orientation: landscape)' },
      },
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
          light: '#e5e5e5',
          dark: '#4d4d4d',
          medium: '#a3a3a3',
        },
        accent: {
          DEFAULT: 'rgb(255 107 0 / <alpha-value>)',
          hover: 'rgb(255 129 38 / <alpha-value>)',
          ink: 'rgb(var(--accent-ink) / <alpha-value>)',
        },
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        mute: 'rgb(var(--mute) / <alpha-value>)',
        graphite: '#121212',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Archivo',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
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
