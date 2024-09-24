/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:["Poppins", "sans-serif"]
    },
    colors:{
      bodyColor: "#212428",
      lightText: "#C4CFDE",
      boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
      designColor: "#ff014f",
    },

      boxShadow: {
      shadowOne: "10px 10px 19px #1cle22, -10px -10px 19px #262a2e",
  },
},
  plugins: [],
}