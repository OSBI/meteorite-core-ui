/*
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

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
