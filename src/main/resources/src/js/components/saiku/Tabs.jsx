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

/**
 * Saiku <Tabs /> component. It requires a createContent function, it is
 * responsible for populate the tab content, whenever the '+' button is pressed.
 * @example
 * function myContent() {
 *   return (<h1>Tab Content</h1>);
 * }
 * <Tabs createContent={myContent}/>
 */
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

  /**
   * Method automatically called when React already built and mounted the
   * component on a dom element. In this case, this method will create the
   * tabs' first tab, filled with the createContent function's content.
   */
  componentDidMount() {
    this._newTab();
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist" key={this.id}>
          {this.state.tabs.map(this.renderTabButtons)}
          <li className="add-tab" role="tab">
            <a role="tab" href="#" onClick={this._newTab}>+</a>
          </li>
        </ul>
        {this.state.tabs.map(this.renderTabPanels)}
      </div>
    );
  }

  /**
   * Helper method called for each tab in order to render its button.
   * @param {Object} tab - an object containing tab data
   * @param {string} tab.key - unique tab identifier
   * @param {string} tab.title - text to be displayed on tab's button
   * @param {Object} tab.component - content returned by createContent function
   * @param {number} index - the index of the tab (the render order)
   */
  renderTabButtons(tab, index) {
    return (
      <li
        className={this._isSelected(tab) ? 'active' : ''}
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

  /**
   * Helper method called for each tab in order to render its content.
   * @param {Object} tab - an object containing tab data
   * @param {string} tab.key - unique tab identifier
   * @param {string} tab.title - text to be displayed on tab's button
   * @param {Object} tab.component - content returned by createContent function
   * @param {number} index - the index of the tab (the render order)
   */
  renderTabPanels(tab, index) {
    return (
      <div className="tab-content" key={tab.key + '_content'}>
        <Tab tabKey={tab.key} isSelected={this._isSelected(tab)}>
          {tab.component}
        </Tab>
      </div>
    );
  }

  /**
   * Utility method to test if a tab is selected of not.
   * @param {Object} tab - an object containing tab data
   * @param {string} tab.key - unique tab identifier
   * @param {string} tab.title - text to be displayed on tab's button
   * @param {Object} tab.component - content returned by createContent function
   */
  _isSelected(tab) {
    return tab.key === this.state.selectedTab;
  }

  /**
   * Method called when the '+' button is pressed. It will instantiate a new tab
   * component, passing the result of createContent function as its child. This
   * method also sets an incremental title to the tab ('Unsaved query(x)').
   */
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

  /**
   * Method called when the user clicks on one tab button. It will set the
   * respective tab as the selected one.
   * @param {Object} tab - an object containing tab data
   * @param {string} tab.key - unique tab identifier
   * @param {string} tab.title - text to be displayed on tab's button
   * @param {Object} tab.component - content returned by createContent function
   */
  _selectTab(tab, event) {
    if (event) {
      event.preventDefault();
    }

    this.setState({selectedTab: tab.key});
  }

  /**
   * Method called when the user clicks on a tab's 'x' button. It will remove
   * this tab and, it it was the selected one, choose another tab to be the
   * new active.
   * @param {Object} tab - an object containing tab data
   * @param {string} tab.key - unique tab identifier
   * @param {string} tab.title - text to be displayed on tab's button
   * @param {Object} tab.component - content returned by createContent function
   */
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
