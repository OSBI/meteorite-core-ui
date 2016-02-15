/*
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

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

gulp.task('fontAwesome', function() {
  gulp.src(paths.source.bowerDir + '/font-awesome/css/font-awesome.min.css')
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.css));
  gulp.src(paths.source.bowerDir + '/font-awesome/fonts/**.*')
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.fonts));
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

gulp.task('waves', function() {
  gulp.src(paths.source.bowerDir + '/Waves/src/stylus/waves.styl')
    .pipe(plumber())
    .pipe(gulp.dest(paths.source.styl.folder));
  gulp.src(paths.source.bowerDir + '/Waves/src/js/waves.js')
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.js));
});

// Call Bower Install
module.exports = gulp.task('bower-install', 
  ['bower', 'fontAwesome', 'jquery', 'bootstrap', 'html5shiv', 'respond', 'waves']);
