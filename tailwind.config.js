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
        black: '#333333',
      },
    },
  },
  plugins: [],
};
