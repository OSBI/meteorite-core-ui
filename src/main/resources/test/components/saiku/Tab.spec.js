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
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import Tab from '../../../src/js/components/saiku/Tab';

function createUnselectedTab() {
  return ReactTestUtils.renderIntoDocument(
    React.createElement(Tab, {
      tabKey: 'tab_key',
      title: 'Tab Title'
    }, 'Tab Content')
  );
}

function createSelectedTab() {
  return ReactTestUtils.renderIntoDocument(
    React.createElement(Tab, {
      tabKey: 'selected_tab_key',
      title: 'Selected Tab Title',
      isSelected: true
    }, 'Selected Tab Content')
  );
}

describe('Tab', () => {
  it('uses "div" by default', () => {
    let component = createUnselectedTab();

    assert.equal(ReactDOM.findDOMNode(component).nodeName, 'DIV');
  });

  it('Should use "tab-pane" class on tab div', () => {
    let component = createUnselectedTab();
    let instanceClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(instanceClassName.match(/\btab-pane\b/));
  });

  it('Should have "active" class name if tab is selected', () => {
    let selectedTab = createSelectedTab();
    let instanceClassName = ReactDOM.findDOMNode(selectedTab).className;

    assert.ok(instanceClassName.match(/\bactive\b/));
  });

  it('Should not use "active" class on an unselected tab div', () => {
    let component = createUnselectedTab();
    let instanceClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(!instanceClassName.match(/\bactive\b/));
  });
});