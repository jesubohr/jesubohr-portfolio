/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px"
      }
    }
  },
  plugins: []
}
