'use strict';

var jquery   = require('jquery');
var _        = require('underscore');
var Backbone = require('backbone');

var ToolbarModel = Backbone.Model.extend({
	getItem: function() {
		return this.get('item');
	}
});

module.exports = ToolbarModel;