const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      ...colors,
      dark: "#0D0D0D",
      grayTrue: "#141414",
      primary: "#36FFE8",
      success: "#188B4E",
      secondary: "#042946",
      neutral: "#5A5A5A"

    },
    // fontSize: {
    //   "xs": ['12px', '1rem'],
    //   "sm": ['15px', '20px'],
    //   "base": ['15px', '1.5rem'],
    //   "lg": ['1.125rem', '28px'],
    //   "xl": ['1.25rem', '28px'],
    //   "2xl": ['1.5rem', '32px'],
    //   "3xl": ['1.875rem', '36px'],
    //   "4xl": ['2.25rem', '40px'],
    //   "5xl": ['3rem', '1'],
    //   "6xl": ['3.75rem', '1'],
    //   "7xl": ['4.5rem', '1'],
    //   "8xl": ['6rem', '1'],

    // },

    fontFamily: {
      raleway: ["Raleway", "Barlow", "Helvetica", "Arial", "sans-serif"],
      inter: ["Inter", "Barlow", "Helvetica", "Arial", "sans-serif"],
      sans: ["Poppins", "Helvetica", "Arial", "sans-serif"]
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
