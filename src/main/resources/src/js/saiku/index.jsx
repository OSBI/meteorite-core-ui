'use strict';

var React   = require('react');
var MenuBar = require('./components/MenuBar/MenuBar');
var Toolbar = require('./components/Toolbar/Toolbar');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<MenuBar />
				<Toolbar />
			</div>
		);
	}
});

React.render(<Main />, document.getElementsByClassName('content')[0]);