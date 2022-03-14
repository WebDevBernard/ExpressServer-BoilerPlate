const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        serif: ["Fira Code", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "#0F172A",
        secondary: "#1E293B",
        light_text: "#C9D2DF",
        dark_text: "#38BDF8",
        neutral_text: "#808EA3",
      },
    },
  },
  plugins: [],
};
