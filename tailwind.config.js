/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    screens:{
    sm:'480px',
    md:'768px',
    lg:'976px',
    xl:'1440px'
    },
    extend: {
      colors:{
        lightGray:'#D9D9D9',
        white:'#ffffff',
        darkPurple:'#A53FF5',
        darkestPurple:'#6F3FF5',
        darkPink:'#FF4487',
        darkOrange:'#FF5722',
        lightYellow:'rgba(250, 205, 73, 0.15)',
        textLight:'#A5A5A5',
        blueShade:'#0295AB'
      }
    },
  },
  plugins: [],
}

