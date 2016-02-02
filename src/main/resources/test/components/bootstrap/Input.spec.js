import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import Input from '../../../src/js/components/bootstrap/Input';

describe('Input', () => {
  it('uses "input" by default', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Input type="text" placeholder="Username" />
    );

    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'INPUT');
  });

  it('has "form-control" class by default', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Input type="text" placeholder="Username" />
    );

    assert.equal(ReactDOM.findDOMNode(instance).className, 'form-control');
  });

  it('Should merge additional classes', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Input type="text" className="foo" placeholder="Username" />
    );
    let instanceClassName = ReactDOM.findDOMNode(instance).className;

    assert.ok(instanceClassName.match(/\bfoo\b/));
    assert.ok(instanceClassName.match(/\bform-control\b/));
  });

  it('has "type" attribute', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Input type="text" placeholder="Username" />
    );
    let node =
      ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'input');

    assert.equal(node.getAttribute('type'), 'text');
  });

  it('has "defaultValue" attribute with value "admin"', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Input type="text" defaultValue="admin" placeholder="Username" />
    );

    assert.equal(instance.getValue(), 'admin');
  });
});
