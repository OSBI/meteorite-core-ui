import React from 'react';
import classNames from 'classnames';

class FormGroup extends React.Component {
  render() {
    return (
      <div
      {...this.props}
      className={classNames('form-group', this.props.className)}>
      {this.props.children}
      </div>
    );
  }
}

FormGroup.propTypes = {
  onRender: React.PropTypes.func,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

export default FormGroup;
