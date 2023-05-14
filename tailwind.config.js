/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx}',
    './index.html',
    // './public/index.html'
  ],
  theme: {
    color: {
      primary: "#3f78e0"
    },
    screens: {
      xm: "440px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
}

