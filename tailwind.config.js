/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,tsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'text-white',
    'bg-white',
    'text-black',
    'bg-black',
    // 必要なクラスをすべて列挙
  ],
  plugins: [],
}