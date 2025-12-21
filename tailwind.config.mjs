/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      screens: { xs: '420px' },
      fontFamily: {
        sans: ["Inter","system-ui","-apple-system","Segoe UI","Roboto","Ubuntu","Cantarell","Noto Sans","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"]
      },
      colors: {
        space: { bg: '#070815', card: 'rgba(255,255,255,0.06)', line: 'rgba(255,255,255,0.12)' },
        neon: { cyan: '#67e8f9', purple: '#c084fc', blue: '#60a5fa' }
      },
      boxShadow: { glow: '0 0 20px rgba(96,165,250,0.35)' },
      backdropBlur: { xs: '2px' },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        twinkle: { '0%, 100%': { opacity: 0.25 }, '50%': { opacity: 1 } }
      },
      animation: { float: 'float 6s ease-in-out infinite', twinkle: 'twinkle 3s ease-in-out infinite' }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
