import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import Row from '../../../src/js/saiku/components/bootstrap/Row';

describe('Row', () => {
  it('uses "div" by default', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Row>Row content</Row>
    );

    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'DIV');
  });

  it('has "row" class by default', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Row>Row content</Row>
    );

    assert.equal(ReactDOM.findDOMNode(instance).className, 'row');
  });

  it('Should merge additional classes', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Row className="foo">Row content</Row>
    );
    let instanceClassName = ReactDOM.findDOMNode(instance).className;

    assert.ok(instanceClassName.match(/\bfoo\b/));
    assert.ok(instanceClassName.match(/\brow\b/));
  });
});
