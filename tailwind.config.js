/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Archivos Vue y JS
    './node_modules/flowbite/**/*.js', // Incluye Flowbite
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), require('flowbite/plugin') // Agrega Flowbite como plugin
  ],
}

