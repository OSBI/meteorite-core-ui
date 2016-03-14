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

import Icon from '../../../src/js/components/saiku/Icon';

describe('Icon', () => {
  it('uses "i" by default', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Icon name="home" />
    );

    assert.equal(ReactDOM.findDOMNode(component).nodeName, 'I');
  });

  it('Should have "fa fa-home" class names if props is `name`', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Icon name="home" />
    );
    let instanceClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(instanceClassName.match(/\bfa\b/));
    assert.ok(instanceClassName.match(/\bfa-home\b/));
  });

  it('Should have "fa fa-home fa-fw" class names ' +
    'if props is `name` and `fixed`', () => {

    let component = ReactTestUtils.renderIntoDocument(
      <Icon name="home" fixed />
    );
    let instanceClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(instanceClassName.match(/\bfa\b/));
    assert.ok(instanceClassName.match(/\bfa-home\b/));
    assert.ok(instanceClassName.match(/\bfa-fw\b/));
  });

  it('Should have "fa fa-home fa-spin" class names ' +
    'if props is `name` and `spin`', () => {

    let component = ReactTestUtils.renderIntoDocument(
      <Icon name="home" spin />
    );
    let instanceClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(instanceClassName.match(/\bfa\b/));
    assert.ok(instanceClassName.match(/\bfa-home\b/));
    assert.ok(instanceClassName.match(/\bfa-spin\b/));
  });

  it('Should have "fa fa-home fa-pulse" class names ' +
    'if props is `name` and `pulse`', () => {

    let component = ReactTestUtils.renderIntoDocument(
      <Icon name="home" pulse />
    );
    let instanceClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(instanceClassName.match(/\bfa\b/));
    assert.ok(instanceClassName.match(/\bfa-home\b/));
    assert.ok(instanceClassName.match(/\bfa-pulse\b/));
  });

  it('Should have "fa fa-home fa-5x" class names ' +
    'if props is `name` and `size`', () => {

    let component = ReactTestUtils.renderIntoDocument(
      <Icon name="home" size="5x" />
    );
    let instanceClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(instanceClassName.match(/\bfa\b/));
    assert.ok(instanceClassName.match(/\bfa-home\b/));
    assert.ok(instanceClassName.match(/\bfa-5x\b/));
  });

  it('Should have "fa fa-home fa-rotate-90" class names ' +
    'if props is `name` and `rotate`', () => {

    let component = ReactTestUtils.renderIntoDocument(
      <Icon name="home" rotate="90" />
    );
    let instanceClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(instanceClassName.match(/\bfa\b/));
    assert.ok(instanceClassName.match(/\bfa-home\b/));
    assert.ok(instanceClassName.match(/\bfa-rotate-90\b/));
  });

  it('Should have "fa fa-home fa-flip-vertical" class names ' +
    'if props is `name` and `flip`', () => {

    let component = ReactTestUtils.renderIntoDocument(
      <Icon name="home" flip="vertical" />
    );
    let instanceClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(instanceClassName.match(/\bfa\b/));
    assert.ok(instanceClassName.match(/\bfa-home\b/));
    assert.ok(instanceClassName.match(/\bfa-flip-vertical\b/));
  });

  it('Should merge additional classes', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Icon name="home" className="foo" />
    );
    let instanceClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(instanceClassName.match(/\bfa\b/));
    assert.ok(instanceClassName.match(/\bfa-home\b/));
    assert.ok(instanceClassName.match(/\bfoo\b/));
  });
});
