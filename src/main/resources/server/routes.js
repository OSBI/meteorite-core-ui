var jsonfile    = require('jsonfile');
var fileMenuBar = './src/js/components/saiku/data/MenuBar.json';
var fileSidebar = './src/js/components/saiku/data/Sidebar.json';
var fileToolbar = './src/js/components/saiku/data/Toolbar.json';
var fileCubes = './src/js/components/saiku/data/Cubes.json';
var dataMock;

var appRouter = function(app) {
  app.get('/', function(req, res) {
    res.send(
      '<h1>Routes:</h1>' +
      '<ul>' +
        '<li><a href="/user?username=admin">Login</a></li>' +
        '<li><a href="/menubar">MenuBar</a></li>' +
        '<li><a href="/sidebar">Sidebar</a></li>' +
        '<li><a href="/toolbar">Toolbar</a></li>' +
        '<li><a href="/cubes">Cubes</a></li>' +
      '</ul>'
    );
  });

  app.get('/user', function(req, res) {
    var accountMock = {
      username: 'admin',
      password: 'admin'
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

  app.get('/sidebar', function(req, res) {
    dataMock = jsonfile.readFileSync(fileSidebar);
    return res.send(dataMock);
  });

  app.get('/toolbar', function(req, res) {
    dataMock = jsonfile.readFileSync(fileToolbar);
    return res.send(dataMock);
  });

  app.get('/cubes', function(req, res) {
    dataMock = jsonfile.readFileSync(fileCubes);
    return res.send(dataMock);
  });
};

module.exports = appRouter;
