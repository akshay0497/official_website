/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      cursor: {
        custom: "url('./assets/cursor.png'), default",
      },
      backgroundImage: {
        'important': "url('/assets/important.png')",
      }
      
    },
  },
  plugins: [],
};
