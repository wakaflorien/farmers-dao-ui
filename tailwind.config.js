/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#082C19",
        secondary: "#0A4425",
        tertiary: "#898585",
        buto: "#F2CF17",
      }
    },
    fontFamily: {
      poppins: ['Poppins'],
    }
  },
  plugins: [],
})
