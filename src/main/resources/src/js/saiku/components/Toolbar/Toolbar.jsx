'use strict';

var React = require('react');
var ToolbarItem = require('./ToolbarItem');

var Toolbar = React.createClass({
	render: function() {
		var itemNode = this.props.data.item.map(function(item) {
			return <ToolbarItem item={item} />
		});

		return (
			<div className="icon-bar seven-up">
				{itemNode}
			</div>
		);
	}
});

module.exports = Toolbar;