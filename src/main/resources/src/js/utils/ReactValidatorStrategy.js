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

import Validator from 'validatorjs';

const ReactValidatorStrategy = {
  createSchema(rules, messsages, callback) {
    return {
      rules,
      messsages,
      callback
    };
  },

  createInactiveSchema(rules, messsages, callback) {
    let schema = this.createSchema(rules, messsages, callback);

    schema.activeRules = [];

    return schema;
  },

  activateRule(schema, rule) {
    if (typeof schema.activeRules !== 'undefined' &&
      schema.activeRules.indexOf(rule) === -1) {
      schema.activeRules.push(rule);
    }
  },

  createValidator(data, schema, forceActive) {
    let rules = {};
    let validator;

    if (typeof schema.activeRules !== 'undefined') {
      if (forceActive) {
        schema.activeRules = Object.keys(schema.rules);
      }

      for (let i in schema.activeRules) {
        let ruleName = schema.activeRules[i];

        rules[ruleName] = schema.rules[ruleName];
      }
    }
    else {
      rules = schema.rules;
    }

    validator = new Validator(data, rules, schema.messsages);

    if (typeof schema.callback === 'function') {
      schema.callback(validator);
    }

    return validator;
  },

  validate(data, schema, options, callback) {
    let forceActive = !options.key;
    let validator = this.createValidator(data, schema, forceActive);

    let getErrors = () => {
      if (options.key) {
        options.prevErrors[options.key] = validator.errors.get(options.key);
        callback(options.prevErrors);
      }
      else {
        callback(validator.errors.all());
      }
    };

    validator.checkAsync(getErrors, getErrors);
  },

  validateServer(data, schema) {
    let validator = this.createValidator(data, schema, true);

    return new Promise((resolve, reject) => {
      validator.checkAsync(
        () => {
          resolve();
        },
        () => {
          let e = new this.Error('A validation error occurred');

          e.errors = validator.errors.all();

          reject(e);
        }
      );
    });
  },

  Error: class extends Error {}
};

export default ReactValidatorStrategy;
