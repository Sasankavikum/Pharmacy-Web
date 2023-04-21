/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    frontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        default: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#22222',
        secondary: '#F5E6E0',
      },
    },
  },
  plugins: [],
}

