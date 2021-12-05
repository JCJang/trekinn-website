module.exports = {
 purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
    colors:{
      warm: {
        lightest: '#F1D7B6',
        light: '#C9AD83',
        dark: '#9E8B73',
        DEFAULT: '#3F3D3D',
      },
      grey: {
        DEFAULT:'#A4A4A4',
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
        DEFAULT: '#384A2C',
      },
    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
