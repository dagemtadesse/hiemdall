/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, svg}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "#EB5E28",
      },
      backgroundImage: {
        classroom: "url('./assets/background.jpg')"
      }
    },
  },
  plugins: [],
}
