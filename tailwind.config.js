/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPrimary: '#1A1A1A',
        customSecond: '#04DACA',
        customThird: '#171717',
      },
      fontFamily: {
        poor: ['"Poor Story"', 'system-ui'],
        piedra: ['"Piedra"', 'serif'],
        satisfy: ['"Satisfy"', 'cursive'],
      },
      animation: {
        'spin-slow' : 'spin 3s linear infinite'
      },
      boxShadow: {
        'custom-blue': '0 0 20px rgba(4, 218, 202, 1)',
        'custom-grey': '0 0 10px rgba(161, 161, 161, 1)',
        'custom-dark': '0 8px 10px rgba(26, 26, 26, 1)'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(transparent, #1A1A1A 50%)',
        'half-bg': 'linear-gradient(to right, #1A1A1A 50%, #FFFFFF 50%)'
      },
    },
  },
  plugins: [],
}