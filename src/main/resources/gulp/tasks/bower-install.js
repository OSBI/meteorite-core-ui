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

gulp.task('foundation', function() {
	gulp.src([paths.source.bowerDir + '/foundation/css/foundation.min.css',
			  paths.source.bowerDir + '/foundation/css/normalize.min.css'])
		.pipe(plumber())
		.pipe(gulp.dest(paths.build.css));
	gulp.src([paths.source.bowerDir + '/foundation/js/foundation.min.js',
			  paths.source.bowerDir + '/foundation/js/vendor/modernizr.js'])
		.pipe(plumber())
		.pipe(gulp.dest(paths.build.js));
});

gulp.task('jquery', function() {
	gulp.src(paths.source.bowerDir + '/jquery/dist/jquery.min.js')
		.pipe(plumber())
		.pipe(gulp.dest(paths.build.js));
});

// Call Bower Install
module.exports = gulp.task('bower-install', ['bower', 'fontAwesome', 'foundation', 'jquery']);