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
      },
      fontFamily: {
        cookierun: ["CookieRun Black"],
        "cookierun-bold": ["CookieRun Bold"],
        "cookierun-regular": ["CookieRun Regular"],
      },
    },
  },
  plugins: [],
};
