'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/bootstrap/Grid';
import Row from './components/bootstrap/Row';
import Col from './components/bootstrap/Col';
import Button from './components/bootstrap/Button';

// class Button extends React.Component {
//   render() {
//     return (
//       <button type="button" className="btn btn-primary">Primary</button>
//     );
//   }
// }

window.onload = () => {
  ReactDOM.render(
    <Grid>
      <Row>
        <Col xs={12} md={8}>
          <p>Hello!!</p>
          <Button type="button" className="btn btn-default">Default</Button>
          <a href="#" className="btn btn-primary btn-lg active">Primary link</a>
        </Col>
      </Row>
    </Grid>,
    document.getElementsByClassName('container')[0]
  );
};
