import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import Col from '../../../src/js/saiku/components/bootstrap/Col';

describe('Col', () => {
  it('uses "div" by default', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Col xs={12}>Col content</Col>
    );

    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'DIV');
  });

  it('Should merge additional classes', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Col xs={12} className="foo">Col content</Col>
    );
    let instanceClassName = ReactDOM.findDOMNode(instance).className;

    assert.ok(instanceClassName.match(/\bfoo\b/));
    assert.ok(instanceClassName.match(/\bcol-xs-12\b/));
  });

  it('Should set "col-xs-*" and "col-md-*" (Mobile and desktop)', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Col xs={12} md={8}>Col content</Col>
    );
    let instanceClassName = ReactDOM.findDOMNode(instance).className;

    assert.ok(instanceClassName.match(/\bcol-xs-12\b/));
    assert.ok(instanceClassName.match(/\bcol-md-8\b/));
  });

  it('Should set "col-xs-*", "col-sm-*" and "col-md-*" (Mobile, tablet, desktop)', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Col xs={12} sm={6} md={8}>Col content</Col>
    );
    let instanceClassName = ReactDOM.findDOMNode(instance).className;

    assert.ok(instanceClassName.match(/\bcol-xs-12\b/));
    assert.ok(instanceClassName.match(/\bcol-sm-6\b/));
    assert.ok(instanceClassName.match(/\bcol-md-8\b/));
  });

  it('Should set Offset of zero', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Col xsOffset={0} smOffset={0} mdOffset={0} lgOffset={0}>Col content</Col>
    );
    let instanceClassName = ReactDOM.findDOMNode(instance).className;

    assert.ok(instanceClassName.match(/\bcol-xs-offset-0\b/));
    assert.ok(instanceClassName.match(/\bcol-sm-offset-0\b/));
    assert.ok(instanceClassName.match(/\bcol-md-offset-0\b/));
    assert.ok(instanceClassName.match(/\bcol-lg-offset-0\b/));
  });

  it('Should set Pull of zero', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Col xsPull={0} smPull={0} mdPull={0} lgPull={0}>Col content</Col>
    );
    let instanceClassName = ReactDOM.findDOMNode(instance).className;

    assert.ok(instanceClassName.match(/\bcol-xs-pull-0\b/));
    assert.ok(instanceClassName.match(/\bcol-sm-pull-0\b/));
    assert.ok(instanceClassName.match(/\bcol-md-pull-0\b/));
    assert.ok(instanceClassName.match(/\bcol-lg-pull-0\b/));
  });

  it('Should set Push of zero', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Col xsPush={0} smPush={0} mdPush={0} lgPush={0}>Col content</Col>
    );
    let instanceClassName = ReactDOM.findDOMNode(instance).className;

    assert.ok(instanceClassName.match(/\bcol-xs-push-0\b/));
    assert.ok(instanceClassName.match(/\bcol-sm-push-0\b/));
    assert.ok(instanceClassName.match(/\bcol-md-push-0\b/));
    assert.ok(instanceClassName.match(/\bcol-lg-push-0\b/));
  });

  it('Should set Hidden of zero', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Col xsHidden smHidden mdHidden lgHidden>Col content</Col>
    );
    let instanceClassName = ReactDOM.findDOMNode(instance).className;

    assert.ok(instanceClassName.match(/\bhidden-xs\b/));
    assert.ok(instanceClassName.match(/\bhidden-sm\b/));
    assert.ok(instanceClassName.match(/\bhidden-md\b/));
    assert.ok(instanceClassName.match(/\bhidden-lg\b/));
  });
});
