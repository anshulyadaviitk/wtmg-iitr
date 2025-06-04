/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lab-primary': '#34495e',
        'lab-accent': '#1abc9c',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//     "./src/app/**/*.{js,ts,jsx,tsx}", // Optional: if using App Router
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         'lab-primary': '#34495e',
//         'lab-accent': '#1abc9c',
//       },
//       animation: {
//         'float': 'float 4s ease-in-out infinite',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-8px)' },
//         }
//       }
//     }
//   },
//   plugins: [],
// }