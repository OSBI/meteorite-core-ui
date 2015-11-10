var jsonfile    = require('jsonfile');
var fileMenuBar = './src/js/saiku/components/MenuBar/data.json';
var fileToolbar = './src/js/saiku/components/Toolbar/data.json';
var dataMock;

var appRouter = function(app) {
	app.get('/', function(req, res) {
		res.send(
			'<h1>Routes:</h1>' +
			'<ul>' +
				'<li><a href="/account?username=breno">Account</a></li>' +
				'<li><a href="/menubar">MenuBar</a></li>' +
				'<li><a href="/toolbar">Toolbar</a></li>' +
			'</ul>'
		);
	});

	app.get('/account', function(req, res) {
		var accountMock = {
			username: 'breno',
			password: '123456'
		};

		if (!req.query.username) {
			return res.send({ 'status': 'error', 'message': 'missing username' });
		}
		else if (req.query.username !== accountMock.username) {
			return res.send({ 'status': 'error', 'message': 'wrong username' });
		}
		else {
			return res.send(accountMock);
		}
	});

	app.get('/menubar', function(req, res) {
		dataMock = jsonfile.readFileSync(fileMenuBar);
		return res.send(dataMock);
	});

	app.get('/toolbar', function(req, res) {
		dataMock = jsonfile.readFileSync(fileToolbar);
		return res.send(dataMock);
	});
};

module.exports = appRouter;