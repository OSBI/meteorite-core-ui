import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import FormGroup from '../../../src/js/components/bootstrap/FormGroup';

describe('FormGroup', () => {
  it('uses "div" by default', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <FormGroup>FormGroup content</FormGroup>
    );

    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'DIV');
  });

  it('has "form-group" class by default', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <FormGroup>FormGroup content</FormGroup>
    );

    assert.equal(ReactDOM.findDOMNode(instance).className, 'form-group');
  });

  it('Should merge additional classes', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <FormGroup className="foo">FormGroup content</FormGroup>
    );
    let instanceClassName = ReactDOM.findDOMNode(instance).className;

    assert.ok(instanceClassName.match(/\bfoo\b/));
    assert.ok(instanceClassName.match(/\bform-group\b/));
  });
});
