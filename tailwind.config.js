/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#646cff',
          hover: '#535bf2',
        },
        bg: {
          primary: '#242424',
          secondary: '#1a1a1a',
        },
        text: {
          primary: 'rgba(255, 255, 255, 0.87)',
          secondary: '#8B8B8C',
        },
        border: '#444',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'custom': '8px',
      },
    },
  },
  plugins: [],
}