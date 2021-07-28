module.exports = {
  purge: [
    'src/**/*.tsx',
    'src/**/*.css',
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  mode:'jit',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      tableLayout: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
