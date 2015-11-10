'use strict';

var React = require('react');
var MenuBarItem = require('./MenuBarItem');

var MenuBar = React.createClass({

	  getInitialState: function() {
	    return {
	      item: '',
	    };
	  },

	  componentDidMount: function() {
	    $.get('http://localhost:3000/menubar', function(result) {
	      if (this.isMounted()) {
	        this.setState({
	          item: result.item,
	        });
	      }
	    }.bind(this));
	  },


	render: function() {
		var itemNode;

		if (this.state.item) {
			// var itemNode = this.props.data.item.map(function(item) {
			itemNode = this.state.item.map(function(item) {
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