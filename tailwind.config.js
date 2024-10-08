/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content:  ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: {
          100: '#FAF3E0',
          200: '#F5E8C8',
        },
        navy: {
          800: '#1A1E30',
        },
        gold: {
          500: '#FFC107',
          600: '#FFA000',
        },
      },
    },
  },
}


