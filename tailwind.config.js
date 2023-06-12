/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'custom-gradient': ['rgba(209, 24, 133, 1)', 'rgba(255, 205, 255, 1)'],
      },
      fontSize:{
        "text-small" :{
          "font-size": [".06rem"],
          "line-height":[" 0.05rem"],
      }
      }
    },
  },
  plugins: [],
}