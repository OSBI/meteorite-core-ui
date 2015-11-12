'use strict';

var React = require('react');

var ToolbarItem = React.createClass({
	render: function() {
		var item = this.props.item;
		var isItemVisible = !item.visible ? 'sku-force-hide' : '';

		return (
			<a className={"item " + isItemVisible}>
				<i className={item.icon}></i>
			</a>
		);
	}
});

module.exports = ToolbarItem;