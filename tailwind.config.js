/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        'blue-primary': '#608FD3',
        'gray-subtitle': '#333333',
      },
      backgroundColor: {
        'blue-primary': '#608FD3',
        'purple-primary': '#4D3D79',
      },
      borderColor:{
        'purple-primary': '#4D3D79',
      },
      colors: {
        'purple-primary-hover': '#7A6F98',
      },
    },
    fontFamily: {
      'satoshi': ['Satoshi-Regular', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus'],
    },
  },
  plugins: [],
}
