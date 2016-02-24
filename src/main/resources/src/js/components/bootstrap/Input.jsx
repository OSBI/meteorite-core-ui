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

import React from 'react';
import classNames from 'classnames';

class Input extends React.Component {
  getInputDOMNode() {
    return this.refs.input;
  }

  getValue() {
    return this.getInputDOMNode().value;
  }

  render() {
    return (
      <input
        {...this.props}
        className={classNames('form-control', this.props.className)}
        ref="input"
      />
    );
  }
}

Input.propTypes = {
  className: React.PropTypes.string,
  type: React.PropTypes.string,
  id: React.PropTypes.string,
  value: React.PropTypes.any,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool
};

export default Input;
