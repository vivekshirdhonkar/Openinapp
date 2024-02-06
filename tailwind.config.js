/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': 'rgba(172, 169, 255, 0.3)',
        'tablebg':'#F5F5F5'
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(to right, theme("colors.accent") 0%,transparent 30%)',
      }
    },
  },
  plugins: [],
}

