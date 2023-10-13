/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'desktop': { 'max': '1200px' },
      'tablet': { 'max': '991px' },
      'mobile': { 'max': '560px' },
    },
    backgroundImage: {
      'img_bg_hero': "url('../assets/bg-hero.jpg')",
    },
    extend: {
      lineHeight: {
        'titles': '120%',
        'texts': '150%',
      },
      colors: {
        'primary-blue': '#106eb0',
        'primary-orange': '#ec7000',
        'primary-gray': '#33303e',
        'second-gray': '#4e4b59',
        'gray-phone': '#f4f4f4',
        'txt-gray': '#7a7786',
        'opacity-gray': 'rgba(100,80,57,0.1)'
      }
    },
  },
  plugins: [],
}