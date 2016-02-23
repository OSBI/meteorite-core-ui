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

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: this.props.children[0],
      removedTabs: {}
    };
  }

  selectTab(tab, event) {
    event.preventDefault();
    this.setState({
      selectedTab: tab
    });
  }

  removeTab(tab, event) {
    event.preventDefault();
    this.state.removedTabs[tab.props.tabKey] = true;
    this.setState({
      selectedTab: null,
      removedTabs: this.state.removedTabs
    });
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          {React.Children.map(this.props.children, this.renderTabButtons, this)}
        </ul>
        {React.Children.map(this.props.children, this.renderTabPanels, this)}
      </div>
    );
  }

  renderTabButtons(tab) {
    if (this.state.removedTabs[tab.props.tabKey]) {
      console.log('this tab is removed', tab);
      return '';
    }

    return (
      <li className={this._isSelected(tab) ? 'active' : ''}
      role="presentation"
      role="tab">
        <a role="tab"
        href={'#' + tab.props.tabKey}
        data-toggle="tab"
        aria-controls={tab.props.tabKey}
        onClick={this.selectTab.bind(this, tab)}>
          <button className="close closeTab" type="button"
          onClick={this.removeTab.bind(this, tab)}>×</button>
          {tab.props.title}
        </a>
      </li>
    );
  }

  renderTabPanels(tab) {
    if (this.state.removedTabs[tab.props.tabKey]) {
      console.log('this tab is removed', tab);
      return '';
    }

    return (
      <div className="tab-content">
        {React.cloneElement(tab, {isSelected: this._isSelected(tab)})}
      </div>
    );
  }

  _isSelected(tab) {
    if (!this.state.selectedTab) return false;
    return tab.props.tabKey === this.state.selectedTab.props.tabKey;
  }
}

Tabs.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default Tabs;
