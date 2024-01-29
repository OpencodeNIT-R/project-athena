const defaultTheme = require("tailwindcss/defaultTheme");
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '12px',
        base: '16px',
        xl: '20px',
        '2xl': '24px',
        '3.5xl': '32px',
        '4xl': '36px',
        '11xl': '64px',
      },
    
      fontFamily: {
        Inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [addDynamicIconSelectors(),],
}


