import React from 'react';
import classNames from 'classnames';

class Row extends React.Component {
  render() {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div
        {...this.props}
        className={classNames(this.props.className, 'row')}>
        {this.props.children}
      </div>
    );
  }
}

Row.propTypes = {
  onRender: React.PropTypes.func,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

export default Row;
