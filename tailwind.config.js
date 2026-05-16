/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        ink: {
          900: '#05080d',
          800: '#0a0f17',
          700: '#0f1620',
          600: '#1a2230',
          500: '#2a3447',
        },
      },
    },
  },
  plugins: [],
}
