/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary: "#2D3134",
        tertiary: "#202020",
        gray: {
          light: "#838383",
        },
        green: {
          primary: "#2F584E",
        },
        orange: {
          primary: "#FF9257",
        },
        yellow: {
          primary: "#F7BE2C",
        },
      },
      textColor: {
        primary: "#151515",
        secondary: "#2D3134",
        tertiary: "#202020",
        gray: {
          light: "#838383",
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out",
        fadeIn: "fadeIn 1s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            transform: "translateY(10%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
