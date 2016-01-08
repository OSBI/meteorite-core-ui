'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/bootstrap/Grid';
import Row from './components/bootstrap/Row';

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
        <p>Test</p>
      </Row>
    </Grid>,
    document.getElementsByClassName('container')[0]
  );
};
