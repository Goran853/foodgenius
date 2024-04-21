/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    fontWeight: {
      default: '300',
      medium: '500',
      strong: '700',
    },
    extend: {
      colors: {
        'brand-primary': '#991530',
        'brand-secondary': '#5D5D5D',
        'gray-light': '#f5f6f7',
        'gray-medium': '#e9e9e9',
      },
    },
  },
  plugins: [],
};
