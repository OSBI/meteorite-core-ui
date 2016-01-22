'use strict';

// Necessary plugins
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var stylus       = require('gulp-stylus');
var poststylus   = require('poststylus');
var autoprefixer = require('autoprefixer');
var paths        = require('../paths');

// Call Stylus
module.exports = gulp.task('stylus', function() {
  var processors = [
    autoprefixer
  ];
  return gulp.src(paths.source.files.styl)
    .pipe(plumber())
    .pipe(stylus({
      use: [
        poststylus(processors)
      ]  
    }))
    .pipe(gulp.dest(paths.build.app));
});