/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      // backgroundImage: {
      //   'banner1': "url('/assets/template1/banner.png')",
      // }
      colors: {
        // Index
        'Primary': '#005792',     // Biru Tua
        'Secondary': '#53CDE2',   // Biru Muda
        'Secondary1': '#D1F4FA',  // Biru Langit
        'Secondary2': '#EDF9FC',  // Biru Tipis

        // Template 1
        'lightBrown': '#F0E5CF',
        'lightWhite': '#F7F6F2',
        'lightGray': '#C8C6C6',
        'lightBlue':'#4B6587'
      },
      fontFamily: {
        // Index
        'Poppins': ['Poppins'],
        'Bebas_Neue': ['"Bebas Neue"'],
        'Nunito': ['Nunito'],

        // Template 1
        'Imperial_Script': ['"Imperial Script"'],
        'Rubik': ['Rubik'],
        'Tangerine': ['Tangerine'],
        'Dancing_Script':['"Dancing Script"'],
      }
    },
  },
  plugins: [],
}
