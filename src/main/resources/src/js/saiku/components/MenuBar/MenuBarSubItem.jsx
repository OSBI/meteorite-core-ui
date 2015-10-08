'use strict';

var React = require('react');

var MenuBarSubItem = React.createClass({
	render: function() {
		var item = this.props.item;

		return (
			<ul className="dropdown">
				{item.map(function(item) {
					return <li><a href="#">{item.name}</a></li>;
				})}
			</ul>
		);
	}
});

module.exports = MenuBarSubItem;