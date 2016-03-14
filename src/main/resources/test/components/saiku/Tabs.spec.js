/**
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

import Tabs from '../../../src/js/components/saiku/Tabs';

function createTabsContent() {
  return React.createElement('h1', null, 'Hello World');
}

function createsTabsComponent() {
  return ReactTestUtils.renderIntoDocument(
    React.createElement(Tabs, {createContent: createTabsContent})
  );
}

function createTabsAndGetNavButtons() {
  let tabs = createsTabsComponent();
  let nav = ReactDOM.findDOMNode(tabs).querySelector('ul.nav-tabs');
  let tabButtons = nav.querySelectorAll('li[role="tab"]');

  return tabButtons;
}

describe('Tabs', () => {
  it('should be created with nav-tabs', () => {
    let tabs = createsTabsComponent();
    let nav = ReactDOM.findDOMNode(tabs).querySelector('ul.nav-tabs');

    assert.isNotNull(nav, 'There should be a nav-tabs child');
  });

  it('should have initially two buttons', () => {
    let tabButtons = createTabsAndGetNavButtons();

    // Two tab buttons: One with content, another the '+' button
    assert.isNotNull(tabButtons, 'There should be tab buttons');
    assert.strictEqual(tabButtons.length, 2, 'There should be 2 tab buttons');
  });

  it('first button should be the content tab button', () => {
    let tabButtons = createTabsAndGetNavButtons();

    // The first button should have content
    assert.equal(tabButtons[0].querySelector('a').text, '×Unsaved query (1)');
  });

  it('second button should be the add tab button', () => {
    let tabButtons = createTabsAndGetNavButtons();

    // The second button should be the add tab
    assert.equal(tabButtons[1].querySelector('a').text, '+');
  });

  it('initial tab content should be the one of createContent func', () => {
    let tabs = createsTabsComponent();
    let content = ReactDOM.findDOMNode(tabs).querySelector('div.tab-pane');

    assert.isNotNull(content, 'There should be a tab-pane child');
    assert.isNotNull(content.querySelector('h1'));
    assert.equal(content.querySelector('h1').textContent, 'Hello World');
  });
});
