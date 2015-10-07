var gulp = require('gulp');
var notify = require('gulp-notify');
var minifycss = require('gulp-minify-css');
var stylus = require('gulp-stylus');
var bower = require('gulp-bower');

var config = {
	bowerDir: './bower_components'
};

gulp.task('bower', function() {
	return bower()
		.pipe(gulp.dest(config.bowerDir));
});

gulp.task('fontAwesome', function() {
	gulp.src(config.bowerDir + '/font-awesome/css/font-awesome.min.css')
		.pipe(gulp.dest('./dist/assets/css'));
	gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
		.pipe(gulp.dest('./dist/assets/fonts'));
});

gulp.task('foundation', function() {
	gulp.src([config.bowerDir + '/foundation/css/foundation.min.css',
		      config.bowerDir + '/foundation/css/normalize.min.css'])
		.pipe(gulp.dest('./dist/assets/css'))
	gulp.src([config.bowerDir + '/foundation/js/foundation.min.js',
		      config.bowerDir + '/foundation/js/vendor/modernizr.js'])
		.pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('jquery', function() {
	gulp.src(config.bowerDir + '/jquery/dist/jquery.min.js')
		.pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('default', ['bower', 'fontAwesome', 'foundation', 'jquery']);