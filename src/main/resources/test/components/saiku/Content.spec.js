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

import Content from '../../../src/js/components/saiku/Content';

describe('Content', () => {
  it('uses "div" by default', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Content>Content here</Content>
    );

    assert.equal(ReactDOM.findDOMNode(component).nodeName, 'DIV');
  });

  it('has "content" class by default', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Content>Content here</Content>
    );

    assert.equal(ReactDOM.findDOMNode(component).className, 'content');
  });

  it('Should have "content-page" class name if props is `page`', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Content page>Content here</Content>
    );

    assert.equal(ReactDOM.findDOMNode(component).className, 'content-page');
  });

  it('Should merge additional classes', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Content className="foo">Content here</Content>
    );
    let instanceClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(instanceClassName.match(/\bcontent\b/));
    assert.ok(instanceClassName.match(/\bfoo\b/));
  });
});
