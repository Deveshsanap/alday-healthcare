/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#1A1A1A',     // The sharp black text
          beige: '#E8DFD6',     // The Hero Section background color
          gold: '#C5A059',      // Accent color
        }
      },
      fontFamily: {
        // This gives it the clean look. Add 'Montserrat' from Google Fonts if you want exact match
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}