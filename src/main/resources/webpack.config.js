'use strict';

module.exports = {
	entry: 'src/js/saiku/index.jsx',
	output: {
		filename: 'dist/saiku/saiku.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			}
		]
	}
};