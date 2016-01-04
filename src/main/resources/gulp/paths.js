'use strict';

module.exports = {
	source: {
		bowerDir: './bower_components',
		react: ['src/js/saiku/**/*.js', 'src/js/saiku/**/*.jsx'],
		files: {
			styl: './src/styl/saiku.styl'
		}
	},

	build: {
		app: './dist/saiku',
		js: './dist/assets/js',
		css: './dist/assets/css',
		img: './dist/assets/img',
		fonts: './dist/assets/fonts'
	}
};