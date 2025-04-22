/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#FAA819',
        dark: {
          DEFAULT: '#0E0E0E',
          light: '#1A1A1A',
        },
        gray: {
          dark: '#333333',
        },
      },
    },
  },
  plugins: [],
} 