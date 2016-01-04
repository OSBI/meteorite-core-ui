'use strict';

var jquery       = require('jquery');
var _            = require('underscore');
var Backbone     = require('backbone');
var MenuBarModel = require('./MenuBarModel');

var MenuBarCollection = Backbone.Collection.extend({
	model: MenuBarModel,
	url: 'http://localhost:3000/menubar'
});

module.exports = MenuBarCollection;