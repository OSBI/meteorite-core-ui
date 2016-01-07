import React from 'react';
import classNames from 'classnames';
// import { autobind } from 'core-decorators';

// @autobind
class Grid extends React.Component {
  constructor() {
    super();
    this.props = {
      fluid: false
    };
  }

  render() {
    let className = this.props.fluid ? 'container-fluid' : 'container';

    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div className={classNames(this.props.className, className)}>
        {this.props.children}
      </div>
    );
  }
}

Grid.propTypes = {
  onRender: React.PropTypes.func,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
 /**
  * Turn any fixed-width grid layout into a full-width layout by this property.
  *
  * Adds `container-fluid` class.
  */
  fluid: React.PropTypes.bool
};

export default Grid;
