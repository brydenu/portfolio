/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        'nav-blur': '0, 30, 30, rgb(255,255,255)',
      },
      fontFamily: {
        pt: ["PT Serif", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}
