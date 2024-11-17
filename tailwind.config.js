/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0a0a0a',
        neonGreen: '#39ff14',
        neonBlue: '#00f5ff',
        neonPink: '#ff007f',
        neonYellow: '#f7e625',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
});

