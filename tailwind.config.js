/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, svg}", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"]
      },
      colors: {
        primaryOrange: "#EB5E28",
        darkBrown: "#252422"
      },
      backgroundImage: {
        classroom: "url('./assets/background.jpg')"
      }
    },
  },
  plugins: [],
}
