/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {
      fontFamily: {
        bodoni: ['Bodoni Moda', 'serif'],
        cormorant: ['Cormorant SC', 'serif'],
        nunito: ['Nunito Sans', 'serif'],
        ballet: ['Ballet', 'serif'],
        passions: ['Passions Conflict', 'serif']
      },
      colors: {
        royalblue: '#162840',
        cream: '#A89B8B',
        rose: '#694551',
        mintjulep: '#F2EBC4',
        codgray: "#0D0D0D",
      },
    },
  },
  plugins: [],
}