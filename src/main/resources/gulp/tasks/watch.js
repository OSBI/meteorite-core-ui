'use strict';

// Necessary plugins
var gulp  = require('gulp');
var paths = require('../paths');

// Call Watch
module.exports = gulp.task('watch', function() {
  gulp.watch('./dist/assets/css/**/*', ['stylus']);
});
