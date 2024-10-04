/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*{html,js}',
    './*{html,js}',
    
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
