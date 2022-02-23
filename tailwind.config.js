module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "body": ["Inter"],
      "hero": ["Righteous"]
    },
    screens: {
      'mobile': { 'max': '480px' },
      'tablet': { 'max': '768px' },
      'desktop': { 'max': '1200px' }
    },
    extend: {
      colors: {
        theme2: "#B50E02",
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
