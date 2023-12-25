/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green':'#4CAF4F',
        "halka":'#4D4D4D',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif' ],
      },
      maxWidth: {
        'container': '1150px',
      }
    },
  },
  plugins: [],
}
