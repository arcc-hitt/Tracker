/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      alt: "#242424",
      navText: "#B5B5B5",
    },
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(90.89% 1661.25% at 100% 123.35%, #0E77D9 0%, #7DA7CE 100%)',
        'custom-gradient': 'linear-gradient(223.1deg, #E1DFE3 17.36%, #FAF6FF 80.35%)',
      },
      
    },
  },
  plugins: [],
}