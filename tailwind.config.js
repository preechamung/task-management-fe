/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'lt-3xl': { max: '1920px' },
      'lt-2xl': { max: '1680px' },
      'lt-xl': { max: '1366px' },
      'lt-lg': { max: '1024px' },
      'lt-md': { max: '768px' },
      'lt-sm': { max: '568px' },
      'lt-xs': { max: '320px' },
    },
    extend: {
      colors: {
        erieblack: '#161819',
        raisinblack: '#1f2125',
        charlestongreen: '#27292d',
        brightgray: '#eeeff3',
        davysgrey: '#545250',
        gray: '#bdbdbd',
        dimgray: '#66686c',
        maximumgreen: '#59932b',
        toolbox: '#6c55aa',
        flax: '#e9d882',
        iceberg: '#74b0d9'
      },
      fontFamily: {
        base: ["Albert\\ Sans", 'serif'],
      },
    },
  },
  plugins: [],
}
