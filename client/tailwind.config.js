/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx}"      
],
  theme: {
    extend: {
      colors:{
        'royal-purple':'#642FF5'
      }
    },
  },
  plugins: [],
}

