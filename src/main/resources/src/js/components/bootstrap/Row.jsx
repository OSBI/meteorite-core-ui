import React from 'react';
import classNames from 'classnames';

class Row extends React.Component {
  render() {
    return (
      <div
        {...this.props}
        className={classNames('row', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

Row.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

export default Row;
