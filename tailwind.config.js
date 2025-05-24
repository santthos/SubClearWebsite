/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#1B2B45',
          DEFAULT: '#1B2B45',
        },
        secondary: {
          50: '#F0F7F4',
          100: '#DCEFEA',
          200: '#B8DFD5',
          300: '#94CFC0',
          400: '#70BFAB',
          500: '#4CAF96',
          600: '#3D8C78',
          700: '#2E695A',
          800: '#1F463C',
          900: '#0F231E',
          DEFAULT: '#146033',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['NATS', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
      },
    },
  },
  plugins: [],
} 