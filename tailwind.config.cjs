/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xl: '1225px',
    },

    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        purple: '#C37ADD',
        success: '#7AD744',
        error: '#F85C5C',
        blue: '#68C4FF',
      },

      boxShadow: {
        card: '0px 0px 2px #EEF4FE, 0px 1px 2px #D0DAEB',
      },

      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },

      animation: {
        'fade-in-down': 'fade-in-down 0.1s ease-in',
      },
    },
  },
  plugins: [],
};
