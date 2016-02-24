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

class Tab extends React.Component {
  render() {
    if (this.props.isRemoved) return null;

    return (
      <div role="tabpanel"
      id={this.props.tabKey}
      className={'tab-pane' + (this.props.isSelected ? ' active' : '')}
      aria-hidden={!this.props.isSelected}>
        {this.props.children}
      </div>
    );
  }
}

Tab.propTypes = {
  title: React.PropTypes.string.isRequired,
  tabKey: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool,
  isRemoved: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired
};

Tab.defaultProps = {
  isRemoved: false
};

export default Tab;
