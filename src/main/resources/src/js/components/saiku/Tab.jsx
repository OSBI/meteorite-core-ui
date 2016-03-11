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

/**
 * This is the <Tab /> component. A tab should display its content if currently
 * selected. A tab must contain a tabKey and children.
 * @example
 * <Tab tabKey={2}>
 *   <h1>Hello World</h1>
 * </Tab>
 */
class Tab extends React.Component {
  render() {
    return (
      <div className="tab-content">
        <div
          role="tabpanel"
          id={this.props.tabKey}
          className={'tab-pane' + (this.props.isSelected ? ' active' : '')}
          aria-hidden={!this.props.isSelected}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

Tab.propTypes = {
  tabKey: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired
};

Tab.defaultProps = {
  isSelected: false
};

export default Tab;
