module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sigap-secondary": "#a2d2ff",
        "sigap-primary": "#003366",
        "sigap-gray": "#9D9D9D",
        "sigap-light": "#f2fafa",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
