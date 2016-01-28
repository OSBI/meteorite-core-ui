var appRouter = function(app) {
  app.get('/', function(req, res) {
    res.send(
      '<h1>Routes:</h1>' +
      '<ul>' +
        '<li><a href="/account?username=breno">Account</a></li>' +
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
};

module.exports = appRouter;
