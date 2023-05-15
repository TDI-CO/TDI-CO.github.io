/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-screen": "url('./assets/images/coding.jpg')",
      },
    },
  },
  plugins: [],
};
