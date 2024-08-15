/** @type {import('tailwindcss').Config} */

  

module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Adding a new font family
        serif: ['Merriweather', 'serif'],
        noticia: ['"Noticia Text"', 'serif'],
        // You can add more custom font families here
      },
    },
  },
  plugins: [],
  // other Tailwind configurations
}

 


