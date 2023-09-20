/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      default: "#97A3FF",
      bg: "#FEC7A6",
      white: "#fff",
    },
    borderWidth: {
      default: "1px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
