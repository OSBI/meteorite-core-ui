'use strict';

var React = require('react');
var MenuBarSubItem = require('./MenuBarSubItem');

var MenuBarItem = React.createClass({
	render: function() {
		var item = this.props.item;

		return (
			<section className="top-bar-section">
				<ul className="left">
					<li className="has-dropdown">
						<a className="active" href="#">{item.name}</a>
						<MenuBarSubItem item={item.subitem} />
					</li>
				</ul>
			</section>
		);
	}
});

module.exports = MenuBarItem;