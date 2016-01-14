import React from 'react';
import classNames from 'classnames';

class Input extends React.Component {
  render() {
    return (
      <input
        {...this.props}
        className={classNames('form-control', this.props.className)}
      />
    );
  }
}

Input.propTypes = {
  onRender: React.PropTypes.func,
  className: React.PropTypes.string,
  type: React.PropTypes.string,
  id: React.PropTypes.string,
  value: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool
};

export default Input;
