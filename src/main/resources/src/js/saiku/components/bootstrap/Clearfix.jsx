import React from 'react';
import classNames from 'classnames';

class Clearfix extends React.Component {
  render() {
    return (
      <div
        {...this.props}
        className={classNames(this.props.className, 'clearfix')}>
      </div>
    );
  }
}

Clearfix.propTypes = {
  className: React.PropTypes.string
};

export default Clearfix;
