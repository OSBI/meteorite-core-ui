'use strict';

var React = require('react');

var ToolbarItem = React.createClass({
	render: function() {
		var item = this.props.item;
		
		return (
			<a className="item">
				<i className={item.icon}></i>
			</a>
		);
	}
});

module.exports = ToolbarItem;