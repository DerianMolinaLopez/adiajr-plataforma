/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'azul-fondo':'#00244A',
        'azul-oscuro':'#1F2937',
      }),
    },
  },
  plugins: [],
}

//#1F2937