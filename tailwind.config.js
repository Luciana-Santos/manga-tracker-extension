/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fafafa',
      blue: {
        100: '#C1C5D5',
        300: '#676F9D',
        600: '#42466B',
        900: '#2D3250',
      },
      accent: '#F8B179',
    },
    fontFamily: {
      raleway: ['"Raleway", sans-serif'],
    },
  },

  plugins: [],
}
