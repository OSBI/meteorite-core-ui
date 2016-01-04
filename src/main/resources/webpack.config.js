'use strict';

var path    = require('path');
var webpack = require('webpack');

module.exports = {
    cache: true,
    debug: true,
    devtool: 'eval',
    entry: './src/js/saiku/index.jsx',
    output: {
        path: path.join(__dirname, 'saiku'),
        filename: 'saiku.min.js'
    },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			}
		]
	},
    resolve: {
    	extensions: ['', '.js', '.jsx']
    }
};
