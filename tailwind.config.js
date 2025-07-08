/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
        quaternary: 'var(--quaternary-color)',
        quinary: 'var(--quinary-color)',
        senary: 'var(--senary-color)',
        septenary: 'var(--septenary-color)',
        bgdark: 'var(--bg)',
        bglight: 'var(--bg1)',
      },
    },
  },
  plugins: [
    scrollbar,
  ],
}
