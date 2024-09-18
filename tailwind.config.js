/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'azul-fondo':'#00244A',
        'azul-oscuro':'#1F2937',
        'azul-rebajado-fondo':"#4B61A6",
        "blanco-rebajado":"#E8E8E8",
        "azul-rebajado-hover":"#415287",
        'gris-oscurecido':"#CDCDCD",
        'azul-claro':'#4B61A6',
        "gris-rebajado-variante":"##D9D9D9",
        'gris-claro-variante':"#D9D9D9",
        'negro-variante':"#1E1E1E",
        'rojo-brilloso':'#F71F3A',
        'rojo-brilloso-hover':'#C9192F',
        'rosa-rojiso':"#E1396C"
      }),
      textColor: theme => ({
        ...theme('colors'),
        'azul-oscuro':'#1F2937',
        'azul-claro':'#4B61A6',
        'azul-rebajado':'#E8E8E8',
        'gris-oscurecido':"#CDCDCD"
      }),
    },
  },
  plugins: [],
}

//#1F2937
//#CDCDCD -> agregar el gris oscuro