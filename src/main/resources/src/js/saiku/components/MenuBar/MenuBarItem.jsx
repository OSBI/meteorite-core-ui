'use strict';

var React = require('react');
var MenuBarSubItem = require('./MenuBarSubItem');

var MenuBarItem = React.createClass({
	render: function() {
		return (
			<section className="top-bar-section">
				<ul className="left">
					<li className="has-dropdown">
						<a className="active" href="#">File</a>
						<MenuBarSubItem />
					</li>
				</ul>
			</section>
		);
	}
});

module.exports = MenuBarItem;