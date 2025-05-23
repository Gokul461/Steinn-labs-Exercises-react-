import { defineConfig } from 'tailwindcss';
const {heroui} = require("@heroui/react");
export default defineConfig({
  content: ["./index.html",  "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontSize: {
        '6xl': '4rem', // Default 3.75rem, but we make it 4rem
        '7xl': '5rem', // Custom larger size
        '8xl': '6rem',
      },
      darkMode: "class",
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [heroui()],
});
