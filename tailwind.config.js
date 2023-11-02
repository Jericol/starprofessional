/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        monserrat: [ 'Montserrat' ],
        roboto: ['Roboto Condensed' ],
        pacifico: [ 'Pacifico' ],
        shadows: [ 'Shadows Into Light' ], 
        righteous: [ 'Righteous' ], 
        advent: [ 'Righteous' ],
        bangers: [ 'Righteous' ]

      },
      colors: {
        baseLight: {
          300: "#cbd5e1",

        },
        baseDark: {
          800: "#423e5c"
        },
        primary: {
          100: "#3A00B0",
          300: "#29007D",
          900: "#120037"
        },
        lightDash: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          600: "#52525b",
          900: "#18181b"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [
    
  ],
}