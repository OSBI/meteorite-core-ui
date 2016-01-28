import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import Row from '../src/js/saiku/components/bootstrap/Row';

describe('Row', () => {
  it('uses "div" by default', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Row>Row content</Row>
    );

    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'DIV');
  });

  it('has "row" class', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Row>Row content</Row>
    );

    assert.equal(ReactDOM.findDOMNode(instance).className, 'row');
  });

  it('Should merge additional classes', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Row className="foo">Row content</Row>
    );

    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\bfoo\b/));
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\brow\b/));
  });
});
