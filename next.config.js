const withTm = require('next-transpile-modules')(['heroicons']);
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages(
  withTm({
    // Target must be serverless
    target: 'serverless',
  })
);
