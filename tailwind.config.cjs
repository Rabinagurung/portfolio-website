/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#070A0F",
        secondary: "#B7C0D8",
        tertiary: "#121826",
        "black-100": "#161C2A",
        "black-200": "#0B0F17",
        "white-100": "#F7F3EA",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #020617",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
