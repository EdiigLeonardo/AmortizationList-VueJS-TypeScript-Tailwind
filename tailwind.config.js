// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
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
  