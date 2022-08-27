/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    borderRadius: {
      DEFAULT: '10px',
    },
    extend: {
      colors: {
        primary: '#FFD370',
        grey: {
          1: '#EFEFEF',
          2: '#9F9A91',
          3: '#333333'
        },
      },
      fontFamily: {
        balooThambi: ['"Baloo Thambi 2"'],
        noto: ['"Noto Sans TC"'],
      },
    },
  },
  plugins: [],
};
