'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/bootstrap/Grid';

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
      <p>Test</p>
    </Grid>,
    document.getElementsByClassName('container')[0]
  );
};
