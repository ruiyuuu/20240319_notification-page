/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      red: "var(--red)",
      blue: "var(--blue)",
      white: "var(--white)",
      veryLightGrayishBlue: "var(--very-light-grayish-blue)",
      lightGrayishBlue1: "var(--light-grayish-blue-1)",
      lightGrayishBlue2: "var(--light-grayish-blue-2)",
      grayishBlue: "var(--grayish-blue)",
      darkGrayishBlue: "var(--dark-grayish-blue)",
      veryDarkBlue: "var(--very-dark-blue)",
    }
  },
  plugins: [],
};
