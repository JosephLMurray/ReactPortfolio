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
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      primary: '#ffedd5',
      secondary: '#fdba74',
      accent: '#f97316',
      neutral: '#1c1917',
      'base-100': '#f5f5f4',
      info: '#38bdf8',
      success: '#15803d',
      warning: '#fde047',
      error: '#f43f5e',
    },
    extend: {
      fontFamily: {
        kannada: ['Kannada', 'sans-serif'],
        telugu: ['Telugu', 'cursive'],
      },
      backgroundImage: {
        bgHero: "url('/src/assets/images/woodHero.jpg')",
      },
    },
  },
  plugins: [],
}
