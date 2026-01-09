/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FACC15",       // taxi yellow
        dark: "#0B0F14",          // deep black
        darkSoft: "#111827",      // soft dark
        brandBlue: "#137fec"      // optional (your old blue)
      },
    },
  },
  plugins: [],
};
