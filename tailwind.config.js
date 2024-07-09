/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-base": "#1ed760",
        "main-dark": "#121212",
        silver: "rgb(107 114 128)",
      },
    },
  },
  plugins: [],
}
