module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'other': {'min': '340px', 'max': '1200px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
      }
    },
    
  },

  plugins: [],
}