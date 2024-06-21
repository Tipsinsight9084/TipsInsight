/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");


export default ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
        fade: 'fade 3s infinite',
        combined: 'sizeAnimation 2s infinite , text 5s ease infinite',
        sizeAnimation : 'sizeAnimation 2s infinite'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        sizeAnimation: {
          '0%, 100%': { fontSize: '20px' },
          '50%': { fontSize: '28px' },
        },
        fade: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '66%': { transform: 'translateY(-20px)' },
          '33%': {transform : 'translateY(20px)'}
        },
      },
      colors: {
        customRed: '#b60d0d',
        customBrown: '#500606',
        customyellow: '#fccf2f',
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}

      }, fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
        'body': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
        'sans': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ]
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
});

