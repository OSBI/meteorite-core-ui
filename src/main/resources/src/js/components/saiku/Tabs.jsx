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
import autoBind from 'react-autobind';
import _ from 'underscore';
import Tab from './Tab';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.id = _.uniqueId('tabs_');
    this.tabCounter = 1;
    this.state = {
      tabs: [],
      selectedTab: null
    };

    autoBind(this, 'renderTabButtons', 'renderTabPanels');
    autoBind(this, '_newTab', '_deleteTab', '_selectTab');
  }

  componentDidMount() {
    this._newTab();
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist" key={this.id}>
          {this.state.tabs.map(this.renderTabButtons)}
          <li className="add-tab" role="presentation" role="tab">
            <a role="tab" href="#" onClick={this._newTab}>+</a>
          </li>
        </ul>
        {this.state.tabs.map(this.renderTabPanels)}
      </div>
    );
  }

  renderTabButtons(tab, index) {
    return (
      <li
        className={this._isSelected(tab) ? 'active' : ''}
        role="presentation"
        role="tab"
        key={'tab_button_' + index}
      >
        <a
          role="tab"
          href={'#' + tab.key}
          data-toggle="tab"
          aria-expanded={this._isSelected(tab)}
          aria-controls={tab.key}
          onClick={(event) => this._selectTab(tab, event)}
        >
          <button
            className="close closeTab"
            type="button"
            onClick={(event) => this._deleteTab(tab, event)}
          >
            ×
          </button>
          {tab.title}
        </a>
      </li>
    );
  }

  renderTabPanels(tab, index) {
    return (
      <div className="tab-content" key={tab.key + '_content'}>
        <Tab tabKey={tab.key} isSelected={this._isSelected(tab)}>
          {tab.component}
        </Tab>
      </div>
    );
  }

  _isSelected(tab) {
    return tab.key === this.state.selectedTab;
  }

  _newTab(event) {
    if (event) {
      event.preventDefault();
    }

    let tab = {
      key: _.uniqueId('tab_'),
      title: 'Unsaved query (' + (this.tabCounter) + ')',
      component: this.props.createContent()
    };

    this.state.tabs.push(tab);
    this.tabCounter++;

    this.setState({
      tabs: this.state.tabs
    });

    this._selectTab(tab);
  }

  _selectTab(tab, event) {
    if (event) {
      event.preventDefault();
    }

    this.setState({selectedTab: tab.key});
  }

  _deleteTab(tab, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    let key = tab.key;
    let tabs = this.state.tabs;

    // Remove the tab
    this.state.tabs = _.without(tabs, _.findWhere(tabs, {key: key}));
    this.setState({tabs: this.state.tabs});

    // If the removed that is the selected, find and select another one
    if (this._isSelected(tab) && (this.state.tabs.length > 0)) {
      _.defer(() => this._selectTab(this.state.tabs[0]));
    }
  }
}

Tabs.propTypes = {
  createContent: React.PropTypes.func.isRequired
};

export default Tabs;
