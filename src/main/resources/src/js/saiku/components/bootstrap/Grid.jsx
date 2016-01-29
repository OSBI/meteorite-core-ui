import React from 'react';
import classNames from 'classnames';

class Grid extends React.Component {
  render() {
    let className = this.props.fluid ? 'container-fluid' : 'container';
    
    return (
      <div
        {...this.props}
        className={classNames(className, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

Grid.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  fluid: React.PropTypes.bool
};

Grid.defaultProps = {
  fluid: false
};

export default Grid;
