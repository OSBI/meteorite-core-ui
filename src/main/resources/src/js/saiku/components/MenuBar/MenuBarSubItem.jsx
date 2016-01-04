'use strict';

var React = require('react');

var MenuBarSubItem = React.createClass({
	render: function() {
		var itemNode = this.props.item.map(function(item) {
			return <li className={!item.visible ? 'hide' : ''}><a href={item.action}>{item.name}</a></li>;
		});

		return (
			<ul className="dropdown">
				{itemNode}
			</ul>
		);
	}
});

module.exports = MenuBarSubItem;