module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: 'rgb(255 255 255)',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      primary: '#f5f5f4',
      secondary: '#7f1d1d',
      accent: '#2563eb',
      neutral: '#1c1917',
      'base-100': '#f5f5f4',
      info: '#0ea5e9',
      success: '#16a34a',
      warning: '#fde047',
      error: '#b91c1c',
    },
    extend: {
      fontFamily: {
        specialelite: ['SpecialElite', 'cursive'],
        rocksalt: ['RockSalt', 'cursive'],
      },
      backgroundImage: {
        bgHero: "url('/src/assets/images/woodHero.jpg')",
      },
    },
  },
  plugins: [],
}
