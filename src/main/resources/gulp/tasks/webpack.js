'use strict';

// Necessary plugins
var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var sourcemaps    = require('gulp-sourcemaps');
var stream        = require('webpack-stream');
var uglify        = require('gulp-uglify');
var webpackConfig = require('../../webpack.config');
var paths         = require('../paths');

// Call Webpack
module.exports = gulp.task('webpack', [], function() {
	return gulp.src(paths.source.react)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(stream(webpackConfig))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.build.app));
});