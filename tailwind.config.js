module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#F5EFEB',
        'navy-blue': '#2F4156',
        'teal': '#567C8D',
        'sky-blue': '#C8D9E6',
      },
      fontFamily: {
        'EB-Garamond': ['EB Garamond', 'serif'],
        'Inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
     require('flowbite/plugin'),
  ],
}
