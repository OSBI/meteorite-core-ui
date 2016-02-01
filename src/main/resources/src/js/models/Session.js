import SaikuServer from '../adapters/SaikuServer';

class Session extends SaikuServer.Model {
  url() {
    return 'user';
  }

  login(credentials, component) {
    // this.fetch({ success: function (model, response, options) {
    //   console.log('SUCCESS');
    //   console.log(model);
    //   console.log(response);
    //   console.log(options);
    // },
    // error: function (model, response, options) {
    //   console.log('ERROR');
    //   console.log(model);
    //   console.log(response);
    //   console.log(options);
    // }});

    let self = this;

    this.save(
      {
        username: credentials.username,
        password: credentials.password
      },
      {
        dataType: 'text',
        success: function(model, response, options) {
          self.loadSession(component);
        },
        error: this.loginFailed
      }
    );
  }

  loadSession(component) {
    component.history.pushState(null, '/workspace/');
  }

  loginFailed(model, response, options) {
    console.error(response.responseText);
  }
}

export default Session;
