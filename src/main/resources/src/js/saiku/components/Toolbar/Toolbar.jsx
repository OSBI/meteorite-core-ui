'use strict';

var _                 = require('underscore');
var ToolbarCollection = require('./ToolbarCollection');
var React             = require('react');
var ToolbarItem       = require('./ToolbarItem');

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
		var itemNode;

		if (this.state && !(_.isEmpty(this.state.models))) {
			itemNode = this.state.models[0].getItem().map(function(item) {
				return <ToolbarItem item={item} />
			});
		}

		return (
			<div className="icon-bar seven-up">
				{itemNode}
			</div>
		);
	}
});

module.exports = Toolbar;