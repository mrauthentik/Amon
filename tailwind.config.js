/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'ecore-gold': '#D4AF37',
        'ecore-gold-dark': '#B8941F',
        'ecore-blue': '#1D4ED8',
        'ecore-blue-dark': '#1E3A8A',
        'ecore-dark': '#0A0A0A',
        'ecore-gray': '#1A1A1A',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #101820 50%, #0d1b2a 100%)',
        'section-gradient': 'linear-gradient(135deg, #faf8f2 0%, #f3efe4 50%, #eef2f7 100%)',
        'gold-glow': 'radial-gradient(ellipse at top left, rgba(212,175,55,0.18) 0%, transparent 60%)',
        'blue-glow': 'radial-gradient(ellipse at bottom right, rgba(29,78,216,0.12) 0%, transparent 60%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
