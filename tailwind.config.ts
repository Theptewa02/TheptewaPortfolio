/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        baiJamjuree: ['var(--font-bai-jamjuree)', 'sans-serif'],
        audiowide: ["var(--font-audiowide)", "sans-serif"],
        kodemono: ["var(--font-kodemono)", "monospace"],
      },
      
    },
  },
  plugins: [
  ],
};
