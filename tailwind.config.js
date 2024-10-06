module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '8xl': ['96px', '106px']
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        customBlue: '#17C6ED',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none', 
          'scrollbar-width': 'none', 
        }
      })
    }
  ],
}
