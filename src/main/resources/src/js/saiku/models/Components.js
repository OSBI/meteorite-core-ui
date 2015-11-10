// Components

var jquery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var Component = Component || {};

Component.MenuBarData = Backbone.Model.extend({
	url: 'http://localhost:3000/menubar',

	initialize: function(args, options) {
		console.log(options);
		this.dialog = options.dialog;
	},

	parse: function(response) {
		// console.log(response);

		this.dialog.populate(response);

		return response;
	}
});

module.exports = Component;