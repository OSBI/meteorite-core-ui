'use strict';

module.exports = {
  source: {
    bowerDir: './bower_components',
    react: ['./src/js/saiku/**/*.js', './src/js/saiku/**/*.jsx'],
    styl: './src/styl/**/*',
    files: {
      styl: './src/styl/saiku.styl',
      css: './dist/saiku/saiku.css',
    }
  },

  build: {
    app: './dist/saiku',
    css: './dist/assets/css',
    fonts: './dist/assets/fonts',
    img: './dist/assets/img',
    js: './dist/assets/js'
  }
};