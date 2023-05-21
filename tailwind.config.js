/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: "#3f78e0",
      secondary: "#21262c",
      contact: "#171717",
      },
    },
  },
  plugins: [],
}