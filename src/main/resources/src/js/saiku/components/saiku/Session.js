import jquery from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import SaikuServer from './SaikuServer';

class Session extends Backbone.Model {
  url() {
    return 'http://localhost:8181/cxf/rest/core/user';
  }

  login(credentials, component) {
    // console.log(component);
    // console.log(credentials);

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

    this.save({username: 'admin', password: 'admin'}, { success: function(model, response, options) {
      console.log(model);
      console.log(response);
      console.log(options);
    }});
  }

  test() {
    return 'Hello!!';
  }
}

export default Session;
