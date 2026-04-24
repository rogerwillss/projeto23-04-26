// import { colors } from "@/styles/colors"
const { colors } = require("./src/styles/colors"); // Use require em vez de import
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./App.tsx", "./components/**/*.{ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: { 
      colors,
    },
  },
  plugins: [],
}