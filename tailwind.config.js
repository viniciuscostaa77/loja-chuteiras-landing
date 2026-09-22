/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B0B0B',
          900: '#141414',
          800: '#1A1A1A',
          700: '#242424',
          600: '#3A3A3A',
        },
        paper: {
          50: '#FFFFFF',
          100: '#F4F4F2',
        },
        mist: {
          400: '#9A9A9A',
          500: '#7A7A7A',
          600: '#5A5A5A',
        },
        flame: {
          400: '#FF8A4D',
          500: '#FF6B1A',
          600: '#E85A0C',
        },
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '0.75rem',
      },
    },
  },
  plugins: [],
}
