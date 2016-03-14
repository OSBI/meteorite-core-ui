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

import Wrapper from '../../../src/js/components/saiku/Wrapper';

describe('Wrapper', () => {
  it('uses "div" by default', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Wrapper>Wrapper content</Wrapper>
    );

    assert.equal(ReactDOM.findDOMNode(component).nodeName, 'DIV');
  });

  it('has "wrapper" class by default', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Wrapper>Wrapper content</Wrapper>
    );

    assert.equal(ReactDOM.findDOMNode(component).className, 'wrapper');
  });

  it('Should have "wrapper-page" class name if props is `page`', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Wrapper page>Wrapper content</Wrapper>
    );

    assert.equal(ReactDOM.findDOMNode(component).className, 'wrapper-page');
  });

  it('Should have "wrapper" class names if props ' +
      'is `isOpenSidebar` equals the true', () => {

    let component = ReactTestUtils.renderIntoDocument(
      <Wrapper isOpenSidebar>Wrapper content</Wrapper>
    );
    let componentClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(componentClassName.match(/\bwrapper\b/));
  });

  it('Should have "smaller forced" class names ' +
      'if props is `isOpenSidebar` equals the false', () => {

    let component = ReactTestUtils.renderIntoDocument(
      <Wrapper isOpenSidebar={false}>Wrapper content</Wrapper>
    );
    let componentClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(componentClassName.match(/\bwrapper\b/));
    assert.ok(componentClassName.match(/\bsmaller\b/));
    assert.ok(componentClassName.match(/\bforced\b/));
  });

  it('Should merge additional classes', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Wrapper className="foo">Wrapper content</Wrapper>
    );
    let componentClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(componentClassName.match(/\bwrapper\b/));
    assert.ok(componentClassName.match(/\bfoo\b/));
  });
});
