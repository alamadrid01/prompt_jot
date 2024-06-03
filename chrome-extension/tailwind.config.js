/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./js/**.js", "popup.html"],
    theme: {
      extend: {
        colors: {
          "primary": "#4c8bf5"
        },
      },
    },
    plugins: [],
  }