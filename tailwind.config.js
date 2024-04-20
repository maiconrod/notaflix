/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C11119',
      },
      backgroundImage: theme => ({
        'background-image': "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(/navImg.jpg)"
      })
    },
  },
  plugins: [],
}