/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth: {
      15: "15px",
    },
    extend: {
      colors: {
        "base-color": "#192655",
        "title-color": "#FCF6EB",
        "bottom-color": "#59433E",
        "red-bulb-color": "#FF1700",
        "yellow-bulb-color": "#FBFF00",
        "green-bulb-color": "#49FF00",
        "blue-bulb-color": "#1910FB",
        "pink-bulb-color": "#F900BF",
        "purple-bulb-color": "#9E00FF",
      },
      fontFamily: {
        cookierun: ["CookieRun Black"],
        "cookierun-bold": ["CookieRun Bold"],
        "cookierun-regular": ["CookieRun Regular"],
      },
      boxShadow: {
        light: "0 4px 0 -1px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
