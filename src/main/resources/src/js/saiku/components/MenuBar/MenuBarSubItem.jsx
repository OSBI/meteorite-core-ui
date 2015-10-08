'use strict';

var React = require('react');

var MenuBarSubItem = React.createClass({
	render: function() {
		return (
			<ul className="dropdown">
				<li><a href="#">Dropdown Option 1</a></li>
				<li><a href="#">Dropdown Option 2</a></li>
				<li><a href="#">Dropdown Option 3</a></li>
			</ul>
		);
	}
});

module.exports = MenuBarSubItem;