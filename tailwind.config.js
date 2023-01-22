module.exports = {
    content: [
      `./src/pages/**/*.{js,ts,jsx,tsx,svg}`,
      `./src/components/**/*.{js,ts,jsx,tsx,svg}`,
    ],
    theme: {
      extend: {
        colors: {
          blue: '#0F4C81',
          slate: '#E1E1E8',
        }
      },
    },
    plugins: [require('tailwind-scrollbar-hide')],
  }