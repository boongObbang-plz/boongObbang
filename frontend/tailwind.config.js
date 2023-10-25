/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "base-color": "#192655",
        "title-color": "#FCF6EB",
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
