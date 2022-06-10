module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sigap-primary": '#41916c',
        "sigap-gray": '#9D9D9D',
        "sigap-light": '#f2fafa',
      },
      fontFamily: {
        "open-sans": ['Open Sans', 'sans-serif'],
        "lato": ['Lato', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}