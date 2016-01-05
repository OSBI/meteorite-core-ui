'use strict';

// Necessary Plugins
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var bower   = require('gulp-bower');
var paths   = require('../paths');

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(paths.source.bowerDir));
});

gulp.task('jquery', function() {
  gulp.src(paths.source.bowerDir + '/jquery/dist/jquery.min.js')
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.js));
});

gulp.task('bootstrap', function() {
  gulp.src([paths.source.bowerDir + '/bootstrap/dist/css/bootstrap-theme.min.css',
        paths.source.bowerDir + '/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.css));
  gulp.src(paths.source.bowerDir + '/bootstrap/dist/fonts/**.*')
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.fonts));
  gulp.src(paths.source.bowerDir + '/bootstrap/dist/js/bootstrap.min.js')
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.js));
});

gulp.task('html5shiv', function() {
  gulp.src(paths.source.bowerDir + '/html5shiv/dist/html5shiv.min.js')
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.js));
});

gulp.task('respond', function() {
  gulp.src(paths.source.bowerDir + '/Respond/dest/respond.min.js')
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.js));
});

// Call Bower Install
module.exports = gulp.task('bower-install', ['bower', 'jquery', 'bootstrap', 'html5shiv', 'respond']);
