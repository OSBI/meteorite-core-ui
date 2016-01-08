import React from 'react';
import classNames from 'classnames';

const Grid = React.createClass({
  propTypes: {
    onRender: React.PropTypes.func,
    className: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
    fluid: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      fluid: false
    };
  },

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
});

export default Grid;
