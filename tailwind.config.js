/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['Press Start 2P', 'cursive']
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      }
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
}