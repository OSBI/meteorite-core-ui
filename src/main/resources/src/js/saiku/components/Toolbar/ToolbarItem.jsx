'use strict';

var React = require('react');

var ToolbarItem = React.createClass({
	render: function() {
		var item = this.props.item;

		// return (
		// 	{item.map(function(item) {
		// 		return <a class="item"><i class={item.icon}></i></a>
		// 	})}
		// );
		
		return (
			<a className="item">
				<i className="fa fa-file"></i>
			</a>
		);
	}
});

module.exports = ToolbarItem;