'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/bootstrap/Grid';
import Row from './components/bootstrap/Row';
import Col from './components/bootstrap/Col';
import Button from './components/bootstrap/Button';
import Input from './components/bootstrap/Input';
import FormGroup from './components/bootstrap/FormGroup';

window.onload = () => {
  ReactDOM.render(
    <Grid>
      <Row>
        <Col xs={12} md={8}>
          <p>Hello!!</p>
          <Button>Default</Button>
          <Button bsStyle="primary" block>Primary</Button>
          <Button href="#" bsStyle="primary" bsSize="large" disabled>Primary link</Button>
          <Button bsStyle="primary" bsSize="large" active>Large button</Button>
          <form>
            <FormGroup>
              <label htmlFor="exampleInputEmail1">Email:</label>
              <Input type="email" id="exampleInputEmail1" placeholder="Email" />
            </FormGroup>
          </form>
        </Col>
      </Row>
    </Grid>,
    document.getElementsByClassName('saiku-app')[0]
  );
};
