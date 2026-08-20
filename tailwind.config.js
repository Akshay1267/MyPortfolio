/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FCFBF9',
          100: '#FAF8F5',
          200: '#F3EFEA',
          300: '#E8E2D8',
          400: '#D5CCC0',
          500: '#B8ABA0',
          600: '#8C7D70',
          700: '#5C5047',
          800: '#3D342E',
          900: '#1C1917',
        },
        amberGold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        float: 'float 4s ease-in-out infinite',
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(44, 34, 25, 0.05), 0 1px 2px rgba(44, 34, 25, 0.03)',
        'warm-md': '0 4px 12px rgba(60, 45, 30, 0.06), 0 2px 4px rgba(60, 45, 30, 0.03)',
        'warm-lg': '0 12px 30px rgba(60, 45, 30, 0.08), 0 4px 10px rgba(60, 45, 30, 0.04)',
        'warm-xl': '0 20px 40px rgba(60, 45, 30, 0.1), 0 8px 16px rgba(60, 45, 30, 0.05)',
        'warm-amber': '0 10px 30px -5px rgba(217, 119, 6, 0.25)',
      },
    },
  },
  plugins: [],
};
