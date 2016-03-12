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

import Logo from '../../../src/js/components/saiku/Logo';

describe('Logo', () => {
  it('should be an image', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Logo
        source="logo.svg"
        width={40}
        height={40}
      />
    );

    assert.equal(ReactDOM.findDOMNode(component).nodeName, 'IMG');
  });

  it('Should accept additional classes', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Logo
        className="foo"
        source="logo.svg"
        width={40}
        height={40}
      />
    );
    let componentClassName = ReactDOM.findDOMNode(component).className;

    assert.ok(componentClassName.match(/\bfoo\b/));
  });

  it('Should provide src and alt prop', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Logo
        source="logo.svg"
        width={40}
        height={40}
        alt="this is alt"
      />
    );
    let image = ReactDOM.findDOMNode(component);

    assert.equal(image.getAttribute('src'), 'logo.svg');
    assert.equal(image.getAttribute('alt'), 'this is alt');
  });

  it('Should provide width and height prop', () => {
    let component = ReactTestUtils.renderIntoDocument(
      <Logo
        source="logo.svg"
        width={40}
        height={40}
      />
    );
    let image = ReactDOM.findDOMNode(component);

    assert.equal(image.getAttribute('width'), 40);
    assert.equal(image.getAttribute('height'), 40);
  });
});
