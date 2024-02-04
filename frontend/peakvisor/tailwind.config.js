/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'green-main': '#2CC978',
        'green-secondary': '#0A715A',
        'yellow-secondary': '#FDFDD8',
        'red-secondary': '#5F0C0C',
        'green-information': '#7EFDBC',
        'red-information': '#FA7A71',
        'grey-information': '#DDDDDD',
      },
    },
  },
  plugins: [],
}

