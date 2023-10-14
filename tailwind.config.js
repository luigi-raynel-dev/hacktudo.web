/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        pallete: {
          primary: '#DF7400'
        },
        primary: {
          light: '#42A5F5',
          main: '#1976D2',
          dark: '#1565C0'
        },
        success: {
          light: '#4CAF50',
          main: '#2E7D32',
          dark: '#1B5E20'
        },
        error: {
          light: '#E57373',
          main: '#F44336',
          dark: '#D32F2F'
        },
        gray: {
          100: '#EBEBEB',
          300: '#8D8D99',
          400: '#AFAFAF',
          600: '#323238',
          800: '#202024',
          900: '#121214'
        },
        store: {
          primary: '#25255B'
        }
      }
    }
  },
  plugins: []
}
