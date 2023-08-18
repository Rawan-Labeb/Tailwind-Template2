/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {

    screens:{
      Mobile: '375px',
      Desktop: '1440px'
    },

    fontWeight:{
      regular:'300',
      bold:'600',
      extrabold:'700'
    },
    colors:{
      
      Blue: 'hsl(223, 87%, 63%)',
      paleBlue: 'hsl(223, 100%, 88%)',
      LightRed: 'hsl(354, 100%, 66%)',
      Gray:'hsl(0, 0%, 59%)',
      VeryDarkBlue: 'hsl(209, 33%, 12%)',
      black:'#000000',
      white:'#FFFFFF'
  
    },

   

    fontFamily:{
      LibreFranklin:['Libre Franklin']
    },
    extend: {},
  },
  plugins: [],
}

