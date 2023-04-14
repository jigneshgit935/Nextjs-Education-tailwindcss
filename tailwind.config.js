/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '300px',
      sm: '640px',
      md: '768px',
      lg: '1080',
      xl: '1280px',
      ['2xl']: '1530px',
    },
    extend: {},
  },
  plugins: [],
};
