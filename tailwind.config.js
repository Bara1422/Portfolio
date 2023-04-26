/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eden: {
          50: '#effefe',
          100: '#c9fefc',
          200: '#92fdfb',
          300: '#54f1f4',
          400: '#21d6e0',
          500: '#08b8c4',
          600: '#03919e',
          700: '#08717d',
          800: '#0b5a64',
          900: '#0e474e',
          950: '#012a32'
        },
        bgRgb: {
          50: 'rgb(48, 64, 99)'
        }
      },
      backgroundImage: {
        freectionary: "url('/freectionary.png')"
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
