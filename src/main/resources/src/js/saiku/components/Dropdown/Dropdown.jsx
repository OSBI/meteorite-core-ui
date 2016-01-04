'use strict';

var React        = require('react');
var DropdownItem = require('./DropdownItem');

var Dropdown = React.createClass({
	render: function() {
		var item = this.props.item;
		var dropdownItem;

		if (item && item.dropdown) {
			dropdownItem = item.dropdown.item.map(function(item) {
				return <li className={!item.visible ? 'hide' : ''}><a href={item.action}>{item.name}</a></li>;
			});
		}

		return (
			<ul id={item.drop} data-dropdown-content className="f-dropdown" aria-hidden="true">
				{item.dropdown.item.map(function(item) {
					return <li className={!item.visible ? 'hide' : ''}><a href={item.action}>{item.name}</a></li>;
				})}
			</ul>
		);
	}
});

module.exports = Dropdown;