import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import Clearfix from '../../../src/js/saiku/components/bootstrap/Clearfix';

describe('Clearfix', () => {
  it('uses "div" by default', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Clearfix />
    );

    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'DIV');
  });

  it('has "clearfix" class by default', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Clearfix />
    );

    assert.equal(ReactDOM.findDOMNode(instance).className, 'clearfix');
  });

  it('Should merge additional classes', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Clearfix className="foo" />
    );
    let instanceClassName = ReactDOM.findDOMNode(instance).className;

    assert.ok(instanceClassName.match(/\bfoo\b/));
    assert.ok(instanceClassName.match(/\bclearfix\b/));
  });
});
