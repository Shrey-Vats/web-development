/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          'tory-blue': '#0c54a0',
          'mustard': '#fed350',
          'vis-vis': '#fff4a2',
          'mustard-light': '#fff4a2', // Reusing vis-vis for a lighter mustard variant
          'tory-blue-light': 'rgba(12, 84, 160, 0.2)', // For focus rings
        },
        fontFamily: {
          inter: ['Inter', 'sans-serif'], // Assuming Inter is desired, or replace with Open Sans if pre-loaded
        },
        boxShadow: {
          'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          'float-delay': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
        animation: {
          float: 'float 3s ease-in-out infinite',
          'float-delay': 'float-delay 3s ease-in-out infinite 0.5s', // Slight delay
        }
      },
    },
    plugins: [],
  };

