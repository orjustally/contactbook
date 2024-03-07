/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'palette-mosaic': ['"Palette Mosaic"', 'system-ui'],
      }
    },
  },
  plugins: [],
}

