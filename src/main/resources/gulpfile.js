var gulp = require('gulp');
var notify = require('gulp-notify');
var minifycss = require('gulp-minify-css');
var stylus = require('gulp-stylus');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var stream = require('webpack-stream');

var path = {
    HTML: './index.html',
    ALL: ['src/js/saiku/**/*.jsx', 'src/js/saiku/**/*.js'],
    MINIFIED_OUT: 'saiku.min.js',
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist/saiku',
    DEST: 'dist'
};

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

gulp.task('css', function() {
	gulp.src('./src/styl/**/*.styl')
		.pipe(stylus())
		.pipe(minifycss())
		.pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('webpack', [], function() {
	return gulp.src(path.ALL)
		.pipe(sourcemaps.init())
		.pipe(stream(webpackConfig))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('webpack-dev-server', function(callback) {
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = 'eval';
    myConfig.debug = true;

    new WebpackDevServer(webpack(myConfig), {
        publicPath: '/' + myConfig.output.publicPath,
        stats: {
        	colors: true
        }
    }).listen(8080, 'localhost', function(err) {
	    if (err) throw new gutil.PluginError('webpack-dev-server', err);
	    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    });
});

// gulp.task('watch', function() {
// 	gulp.watch('./src/stylus/**/*.styl', ['css']);
// });

gulp.task('watch', function() {
	gulp.watch(path.ALL, ['webpack']);
});

gulp.task('bowerInstall', ['bower', 'fontAwesome', 'foundation', 'jquery']);

// gulp.task('default', ['bowerInstall', 'watch']);

// http://localhost:8080/webpack-dev-server/index.html
gulp.task('default', ['webpack-dev-server', 'watch']);