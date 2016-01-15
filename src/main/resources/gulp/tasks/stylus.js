'use strict';

// Necessary plugins
var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var stylus      = require('gulp-stylus');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var paths       = require('../paths');

// Call Stylus
module.exports = gulp.task('stylus', function() {
  return gulp.src(paths.source.files.styl)
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest(paths.build.app))
    .pipe(reload({ stream: true }));
});