/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        cadetGray: '#98A0AB',
        oxfordBlue: '#11284B',
        indigoDye: '#334663',
        robinEggBlue: '#4CC6C5',
        robinLightEggBlue: '#5CCBCA',
      },
      spacing: {
        "1/5": '12%',
          104: '28rem',
      },
    },
  },
  plugins: []
}