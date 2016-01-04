'use strict';

var React = require('react');

var ToolbarItem = React.createClass({
	render: function() {
		var item = this.props.item;
		var isItemVisible = !item.visible ? 'sku-force-hide' : '';

		return (
			<a className={"item " + isItemVisible} data-dropdown={item.drop} aria-controls={item.drop} aria-expanded="false">
				<i className={item.icon}></i>
			</a>
		);
	}
});

module.exports = ToolbarItem;