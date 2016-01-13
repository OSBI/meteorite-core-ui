import React from 'react';
import classNames from 'classnames';
// import styleMaps from './styleMaps';

const TYPES = ['button', 'reset', 'submit'];

class Button extends React.Component {
  renderAnchor() {
    let href = this.props.href || '#';

    return (
      <a
      {...this.props}
      href={href}
      className={classNames(this.props.className)}
      role="button">
      {this.props.children}
      </a>
    );
  }

  renderButton() {
    return (
      <button
      {...this.props}
      type={this.props.type || 'button'}
      className={classNames(this.props.className)}>
      {this.props.children}
      </button>
    );
  }

  render() {
    let renderFuncName = this.props.href || this.props.target ?
      'renderAnchor' : 'renderButton';

    return this[renderFuncName]();
  }
}

Button.propTypes = {
  onRender: React.PropTypes.func,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  disabled: React.PropTypes.bool,
  href: React.PropTypes.string,
  target: React.PropTypes.string,
  type: React.PropTypes.oneOf(TYPES)
};

export default Button;
