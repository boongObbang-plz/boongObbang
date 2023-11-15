/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
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
      boxShadow: {
        light: "0 4px 0 -1px rgba(0, 0, 0, 1)",
        "red-smudge": "0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 6px 2px #FF1700",
        "yellow-smudge": "0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 6px 2px #FBFF00",
        "green-smudge": "0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 6px 2px #49FF00",
        "blue-smudge": "0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 6px 2px #1910FB",
        "pink-smudge": "0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 6px 2px #F900BF",
        "purple-smudge": "0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 6px 2px #9E00FF",
      },
      animation: {
        "red-blink": "red-blink 1s cubic-bezier(0.39, 0.58, 0.57, 1) infinite;",
        "yellow-blink":
          "yellow-blink 1s cubic-bezier(0.39, 0.58, 0.57, 1) infinite;",
        "green-blink":
          "green-blink 1s cubic-bezier(0.39, 0.58, 0.57, 1) infinite;",
        "blue-blink":
          "blue-blink 1s cubic-bezier(0.39, 0.58, 0.57, 1) infinite;",
        "pink-blink":
          "pink-blink 1s cubic-bezier(0.39, 0.58, 0.57, 1) infinite;",
        "purple-blink":
          "purple-blink 1s cubic-bezier(0.39, 0.58, 0.57, 1) infinite;",
        "fade-out":
          "fade-out 3s"
      },
      keyframes: {
        "red-blink": {
          "40%": { background: "#FF9C92" },
        },
        "yellow-blink": {
          "50%": { background: "#FFC90A" },
        },
        "green-blink": {
          "80%": { background: "#D6FFC5" },
        },
        "blue-blink": {
          "80%": { background: "#938FFF" },
        },
        "pink-blink": {
          "20%": { background: "#FF97E7" },
        },
        "purple-blink": {
          "50%": { background: "#DEA8FF" },
        },
        "fade-out": {
          "100%": { opacity: 0 },
        },
      },
      screens: {
        "mobile": "376px",
        "desktop": "733px",
      }
    },
  },
  plugins: [],
};
