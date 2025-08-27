/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app.vue',
      './pages/**/*.{vue,js,ts}',
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.{vue,js,ts}',
      './plugins/**/*.{js,ts}',
    ],
    theme: { extend: {} },
    plugins: [require('@tailwindcss/typography')],
  }
  