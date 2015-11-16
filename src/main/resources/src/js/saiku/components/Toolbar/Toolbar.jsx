'use strict';

var _                 = require('underscore');
var ToolbarCollection = require('./ToolbarCollection');
var React             = require('react');
var ToolbarItem       = require('./ToolbarItem');
var Dropdown          = require('../Dropdown/Dropdown');

var Toolbar = React.createClass({
	collection: new ToolbarCollection(),

	getInitialState: function() {
		return {
			models: ''
		}
	},

	componentDidMount: function() {
		this.collection.fetch({
			success: this.handleFetch
		});
	},

	handleFetch: function(collection) {
		this.setState({
			models: collection.models
		});
	},

	render: function() {
		var toolbarItem;
		var dropdown;

		if (this.state && !(_.isEmpty(this.state.models))) {
			toolbarItem = this.state.models[0].getItem().map(function(item) {
				return <ToolbarItem item={item} />
			});

			dropdown = this.state.models[0].getItem().map(function(item) {
				return item.dropdown ? <Dropdown item={item} /> : null
			});
		}

		return (
			<div className="icon-bar seven-up">
				{toolbarItem}
				{dropdown}
			</div>
		);
	}
});

module.exports = Toolbar;