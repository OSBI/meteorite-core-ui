/** @jsx React.DOM  */

'use strict';

var React = require('react');

module.export = React.createClass({
	render: function() {
		return (
			<section className="top-bar-section">
				<ul className="left">
					<li className="has-dropdown">
						<a className="active" href="#">File</a>
						<ul className="dropdown">
							<li><a href="#">Dropdown Option</a></li>
							<li><a href="#">Dropdown Option</a></li>
							<li><a href="#">Dropdown Option</a></li>
						</ul>
					</li>
				</ul>
			</section>
		);
	}
});