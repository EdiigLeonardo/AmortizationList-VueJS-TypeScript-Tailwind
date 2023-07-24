// postcss.config.js
module.exports = (ctx) => ({
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(ctx.env === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.tsx'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {}),
  },
});
