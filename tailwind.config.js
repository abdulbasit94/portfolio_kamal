/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js}"],
  theme: {
    extend: {},
    fontFamily:{
      'display' : ['DM SANS'],
      'body' : ['Helvetica']
    },
    screens: {
      sm: "800px",
      // => @media (min-width: 800px) { ... }

      tablet: "801px",
      // => @media (min-width: 801px) { ... }

      desktop: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
  },
  plugins: [],
}

