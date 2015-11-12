'use strict';

// Necessary plugins
var gulp             = require('gulp');
var webpack          = require('webpack');
var gutil            = require('gulp-util');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig    = require('../../webpack.config');
var paths            = require('../paths');

// Call Webpack Dev Servers
module.exports = gulp.task('webpack-dev-server', function(callback) {
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