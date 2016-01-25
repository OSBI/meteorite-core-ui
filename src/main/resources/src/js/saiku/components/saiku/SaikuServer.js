import jquery from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Settings from './Settings';

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
  // let url = '/cxf/rest/core/user';
  let url = 'http://localhost:8181/cxf/rest/core/user';

  // Prepare for failure
  if (typeof Settings.ERRORS === 'undefined') {
    Settings.ERRORS = 0;
  }

  let errorLogout = () => {
    Settings.ERRORS++;
    if (Settings.ERRORS < Settings.ERROR_TOLERANCE) {
      console.log('Logout!!');
    } else {
      console.log('Communication problem with the server. Please reload the application...');
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
  // let contentType = 'application/json';

  if (typeof options.contentType !== 'undefined') {
    contentType = options.contentType;
  }

  let data = model.attributes;

  if (typeof options.data !== 'undefined') {
    data = options.data;
  }

  // options.headers = {
  //   'Authorization': 'Basic a2FyYWY6a2FyYWY='
  // };

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
      let auth = 'Basic a2FyYWY6a2FyYWY=';

      request.setRequestHeader('Authorization', auth);
      // return true;
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
  jquery.ajax(params);
};

export default Backbone;
