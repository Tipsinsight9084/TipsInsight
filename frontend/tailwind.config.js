/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#b60d0d',
        customBrown: '#500606',
        customyellow: '#fccf2f',
        customgray: '#f2f2f2'
      }, fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        'custom-light': 300,
        'custom-normal': 400,
        'custom-semibold': 600,
        'custom-bold': 700,
      },
      gradientColorStops: theme => ({
        'red-brown': ['#3490dc', '#38a169'],
        // Add more gradient color stops as needed
      })
    },
  },
  plugins: [],
}

