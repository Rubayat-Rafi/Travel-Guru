/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#F9A51A',
        blackColor: '#000000',
        

      }
    },
  },
  plugins: [require('daisyui'),],
}