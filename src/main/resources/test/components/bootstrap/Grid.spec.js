import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import Grid from '../../../src/js/saiku/components/bootstrap/Grid';

describe('Grid', () => {
  it('uses "div" by default', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Grid>Grid content</Grid>
    );

    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'DIV');
  });

  it('has "container" class by default', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Grid>Grid content</Grid>
    );

    assert.equal(ReactDOM.findDOMNode(instance).className, 'container');
  });

  it('turn grid into "full-width" layout via "fluid" property set', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Grid fluid>Grid content</Grid>
    );

    assert.equal(ReactDOM.findDOMNode(instance).className, 'container-fluid');
  });

  it('Should merge additional classes', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Grid className="foo" fluid>Grid content</Grid>
    );
    let instanceClassName = ReactDOM.findDOMNode(instance).className;

    assert.ok(instanceClassName.match(/\bfoo\b/));
    assert.ok(instanceClassName.match(/\bcontainer-fluid\b/));
  });
});
