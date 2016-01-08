import React from 'react';
import classNames from 'classnames';

class Grid extends React.Component {
  render() {
    let className = this.props.fluid ? 'container-fluid' : 'container';

    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div
        {...this.props}
        className={classNames(this.props.className, className)}>
        {this.props.children}
      </div>
    );
  }
}

Grid.propTypes = {
  onRender: React.PropTypes.func,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  fluid: React.PropTypes.bool
};

Grid.defaultProps = {
  fluid: false
};

export default Grid;
