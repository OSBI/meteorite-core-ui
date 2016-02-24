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

class Wrapper extends React.Component {
  render() {
    let className = this.props.page ? 'wrapper-page' : 'wrapper';

    if (this.props.isOpenSidebar) {
      className = classNames(className, 'enlarged forced');
    }
    else {
      className = this.props.page ? 'wrapper-page' : 'wrapper';
    }

    return (
      <div
        {...this.props}
        className={classNames(className, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

Wrapper.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  page: React.PropTypes.bool,
  isOpenSidebar: React.PropTypes.bool
};

Wrapper.defaultProps = {
  page: false
};

export default Wrapper;
