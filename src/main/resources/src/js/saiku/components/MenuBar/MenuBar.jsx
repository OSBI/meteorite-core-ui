'use strict';

var React = require('react');
var MenuBarModelCollection = require('./collection');
var MenuBarItem = require('./MenuBarItem');

var MenuBar = React.createClass({
	collection: new MenuBarModelCollection(),

	getInitialState: function() {
		return {
			models: this.collection.models
		}
	},

	componentDidMount: function() {
		this.collection.fetch({
			success: this.handleFetchSuccess
		});
	},

	handleFetchSuccess: function(collection) {
		this.setState({
			models: collection.models
		});
	},

	render: function() {
		var itemNode;
		
		if (this.state.models[0]) {
			console.log(this.state.models[0]);
			console.log(this.state.models[0].cid);
			console.log(this.state.models[0].get('item'));

			// var itemNode = this.props.data.item.map(function(item) {
			itemNode = this.state.models[0].get('item').map(function(item) {
			// var itemNode = this.state.data.item.map(function(item) {
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