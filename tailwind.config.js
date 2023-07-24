// tailwind.config.js
module.exports = {
    purge: [],
    content: ["./public/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["winter",{
        mythemes: {
          "success": "#80ced1",
        }
      }],
    },
  }
  