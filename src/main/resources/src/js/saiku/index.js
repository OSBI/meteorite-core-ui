'use strict';

import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button type="button" className="btn btn-primary">Primary</button>
    );
  }
}

window.onload = () => {
  React.render(
    <Button />,
    document.getElementsByClassName('container')[0]
  );
};
