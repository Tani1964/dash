/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-left': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'pulse': {
          '0%,100%': {
            opacity: 1,
          },
          '50%': {
            opacity: .5,
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'slide-left': 'slide-left 2s ease-in-out',
        'slide-right': 'slide-right 2s ease-in-out',
        'slide-down': 'pulse 4s ease-in-out',
        'slide-up': 'slide-up 2s ease-in-out',
      },
    },
  },
  plugins: [],
}

