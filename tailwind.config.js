/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#2997FF',
        gray: {
          default: "#86868B",
          100: '#98928d',
          200: '#afafaf',
          300: '#42424570'
        },
        zinc: '#101010'
      }
    },
  },
  plugins: [],
}

