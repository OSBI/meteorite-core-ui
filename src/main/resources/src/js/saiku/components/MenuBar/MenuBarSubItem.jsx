'use strict';

var React = require('react');

var MenuBarSubItem = React.createClass({
	render: function() {
		var item = this.props.item;

		return (
			<ul className="dropdown">
				{item.map(function(item) {
					return <li className={!item.visible ? 'hide' : ''}><a href={item.action}>{item.name}</a></li>;
				})}
			</ul>
		);
	}
});

module.exports = MenuBarSubItem;