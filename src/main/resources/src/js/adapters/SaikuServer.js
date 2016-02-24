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

import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Settings from '../utils/Settings';
import Base64 from '../utils/Base64';

Backbone.sync = (method, model, options) => {
  let params;
  let methodMap = {
    'create': 'POST',
    'read': 'GET',
    'update': 'PUT',
    'delete': 'DELETE'
  };

  // Generate AJAX action
  let type = methodMap[method];
  let url = Settings.REST_URL +
    (_.isFunction(model.url) ? model.url() : model.url);

  // Prepare for failure
  if (typeof Settings.ERRORS === 'undefined') {
    Settings.ERRORS = 0;
  }

  let errorLogout = () => {
    Settings.ERRORS++;
    if (Settings.ERRORS < Settings.ERROR_TOLERANCE) {
      // TODO: Add method logout() in Session.js.
      console.log('Logout...');
    }
    else {
      console.log('Communication problem with the server. ' +
        'Please reload the application...');
    }
  };

  let statuscode = {
    0: () => {
      errorLogout();
    },
    401: () => {
      errorLogout();
    }
  };

  let failure = (jqXHR, textStatus, errorThrown) => {
    if (typeof console !== 'undefined' && console && console.error) {
      console.error('Error performing ' + type + ' on ' + url);
      console.error(errorThrown);
    }
    if (options.error) {
      options.error(jqXHR, textStatus, errorThrown);
    }
  };

  let success = (data, textStatus, jqXHR) => {
    Settings.ERRORS = 0;
    options.success(data, textStatus, jqXHR);
  };

  let async = true;

  if (options.async === false) {
    async = false;
  }

  let dataType = 'json';

  if (typeof options.dataType !== 'undefined') {
    dataType = options.dataType;
  }

  let contentType = 'application/x-www-form-urlencoded';

  if (typeof options.contentType !== 'undefined') {
    contentType = options.contentType;
  }

  let data = model.attributes;

  if (typeof options.data !== 'undefined') {
    data = options.data;
  }

  let btoa = window.btoa;

  let encode = (credentials) => {
    // Use Base64 encoding to create the authentication details
    // Using unescape and encodeURIComponent to allow for Unicode strings
    // https://developer.mozilla.org/en-US/docs/Web/API/window.btoa
    if (btoa) {
      return btoa(unescape(encodeURIComponent(
        [credentials.username, credentials.password].join(':'))));
    }

    return Base64.encode(
      [credentials.username, credentials.password].join(':')
    );
  };

  // Default JSON-request options.
  params = {
    url: url,
    type: type,
    cache: false,
    data: data,
    contentType: contentType,
    dataType: dataType,
    success: success,
    statusCode: statuscode,
    error: failure,
    crossDomain: true,
    async: async,
    beforeSend: (request) => {
      if (data.username && data.password) {
        let auth = 'Basic ' + encode(data);

        request.setRequestHeader('Authorization', auth);
        return true;
      }
    }
  };

  if (options.processData === false) {
    params.processData = false;
  }

  // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
  // And an `X-HTTP-Method-Override` header.
  if (Backbone.emulateHTTP) {
    if (type === 'PUT' || type === 'DELETE') {
      if (Backbone.emulateHTTP) {
        params.data._method = type;
      }
      params.type = 'POST';
      params.beforeSend = (xhr) => {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
      };
    }
  }

  // Make the request
  $.ajax(params);
};

export default Backbone;
