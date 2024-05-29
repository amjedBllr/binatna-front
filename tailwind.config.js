/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      lg: '1440px',
      md: '960px',
      sm: '576px',
    },
    extend: {
      colors: {
        primary: "#8ECAE6",
        secondary: "#219EBC",
        tertiary: "#FB8500",
        "black-100": "#171717",
        "white-100": "#D1DFE5",
        "white-200": "#E9F1F5",
      },
    },
  },
  plugins: [],
}
