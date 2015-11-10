'use strict';

var jquery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var MenuBarModel = Backbone.Model.extend({
	getItem: function() {
		return this.get('item');
	}
});

module.exports = MenuBarModel;