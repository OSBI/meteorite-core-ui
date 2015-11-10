'use strict';

var _                 = require('underscore');
var React             = require('react');
var MenuBarCollection = require('./MenuBarCollection');
var MenuBarItem       = require('./MenuBarItem');

var MenuBar = React.createClass({
	collection: new MenuBarCollection(),

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
		var itemNode;

		if (this.state && !(_.isEmpty(this.state.models))) {
			itemNode = this.state.models[0].getItem().map(function(item) {
				return <MenuBarItem item={item} />
			});
		}

		return (
			<nav className="top-bar" data-topbar role="navigation">
				{itemNode}
			</nav>
		);
	}
});

module.exports = MenuBar;