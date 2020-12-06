module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#334048',
        'buttonColor':'#202B32',
        'secondary':'#052E47',
        'buttonColorsky':"#237AC2"
        
       })

    },
    textColor: theme => theme('colors'),
     textColor: {
      
       'primary': '#052E47',
        'secondary':'#73767D',
         'white':"#FFFFFF"
     }

  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [],
}
