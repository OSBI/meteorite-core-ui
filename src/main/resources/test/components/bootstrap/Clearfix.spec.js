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

import Clearfix from '../../../src/js/components/bootstrap/Clearfix';

describe('Clearfix', () => {
  it('uses "div" by default', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Clearfix />
    );

    assert.equal(ReactDOM.findDOMNode(component).nodeName, 'DIV');
  });

  it('has "clearfix" class by default', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Clearfix />
    );

    assert.equal(ReactDOM.findDOMNode(component).className, 'clearfix');
  });

  it('Should merge additional classes', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Clearfix className="foo" />
    );
    let instanceClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(instanceClassName.match(/\bclearfix\b/));
    assert.ok(instanceClassName.match(/\bfoo\b/));
  });
});
