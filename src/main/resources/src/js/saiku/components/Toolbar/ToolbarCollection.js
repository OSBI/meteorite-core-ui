'use strict';

var jquery       = require('jquery');
var _            = require('underscore');
var Backbone     = require('backbone');
var ToolbarModel = require('./ToolbarModel');

var ToolbarCollection = Backbone.Collection.extend({
	model: ToolbarModel,
	url: 'http://localhost:3000/toolbar'
});

module.exports = ToolbarCollection;