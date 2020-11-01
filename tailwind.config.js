const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.tsx',
    './src/**/*.ts',
    './blogs/**/*.md',
    './blogs/**/*.mdx',
    './til/**/*.md',
    './til/**/*.mdx',
    './workshops/**/*.md',
    './workshops/**/*.mdx',
  ],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: defaultTheme.colors.teal,
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    boxShadow: ({ after }) => after(['focus-visible']),
  },
  plugins: [require('@tailwindcss/ui')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
