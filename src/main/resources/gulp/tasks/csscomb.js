'use strict';

// Necessary plugins
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var csscomb = require('gulp-csscomb');
var paths   = require('../paths');

// Call Stylus
module.exports = gulp.task('csscomb', function() {
  return gulp.src(paths.source.files.css)
    .pipe(plumber())
    .pipe(csscomb())
    .pipe(gulp.dest(paths.build.app));
});