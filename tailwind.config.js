/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardColour: "rgba(var(--cardComponent))",
        textColour: "rgba(var(--text-colour))",
        bgColour: "rgba(var(--bg-colour))",
        borderColor: "rgba(var(--borderColor))",
      }
    },
  },
  plugins: [],
}