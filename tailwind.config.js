/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '362px',
      ...defaultTheme.screens,
    },
    extend: {},
    colors : {
      'mainYellow':'#CAFF33',
      'lightYellow':'#22251B',
      'darkGray':'#1C1C1C',
      'lighterGray': '#262626',
      'white': '#FFFFFF',
      'black': '#000000'
    },
  },
  plugins: [],
}

