'use strict';

import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class Grid extends React.component {
  constructor() {
    this.props = {
      fluid: false
    }
  }

  render() {
    let className = this.props.fluid ? 'container-fluid' : 'container';

    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

Grid.propTypes = {
 /**
  * Turn any fixed-width grid layout into a full-width layout by this property.
  *
  * Adds `container-fluid` class.
  */
  fluid: React.PropTypes.bool
};

export default Grid;