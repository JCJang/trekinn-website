module.exports = {
 purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
  theme: {
    transparent: 'transparent',
      current: 'currentColor',
      warm: {
        lightest: '#F1D7B6',
        light: '#C9AD83',
        dark: '#9E8B73',
        darkest: '#3F3D3D',
      },
      grey: {
        lightest:'#A4A4A4',
        dark: '#988D98',
        darkest: '#3E4F54',
      },
      background: {
        DEFAULT: '#FFF6F2',
        beige: '#EDE2DD',
        cool: '#D8E5E3',
      },
      accent: {
        blue: '#83C4D2',
        red: '#E4816C',
        green: '#A7C9AF',
        forest: '#384A2C',
      },
      gradient: {
        multiply: 'linear-gradient(180deg, #DDE6ED 0%, #66838B 100%);',
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
