/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black : "#111116",
        gray : "#1c1b20"
      }
    },
  },
  plugins: [],
}

