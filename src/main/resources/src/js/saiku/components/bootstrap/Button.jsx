import React from 'react';
import classNames from 'classnames';
import styleMaps, { DEFAULT } from './styleMaps';

const TYPES = ['button', 'reset', 'submit'];

class Button extends React.Component {
  renderAnchor(classes) {
    let href = this.props.href || '#';

    classes.disabled = this.props.disabled;

    return (
      <a
      {...this.props}
      href={href}
      className={classNames('btn', this.props.className, classes)}
      role="button">
      {this.props.children}
      </a>
    );
  }

  renderButton(classes) {
    return (
      <button
      {...this.props}
      type={this.props.type || 'button'}
      className={classNames('btn', this.props.className, classes)}>
      {this.props.children}
      </button>
    );
  }

  render() {
    let renderFuncName = this.props.href || this.props.target ?
      'renderAnchor' : 'renderButton';
    let size = styleMaps.SIZES[this.props.bsSize];
    let classes = {};

    classes['btn-' + (this.props.bsStyle ? this.props.bsStyle : DEFAULT)] = true;

    if (this.props.bsSize) {
      classes['btn-' + size] = true;
    }

    if (this.props.block) {
      classes['btn-block'] = true;
    }

    classes.active = this.props.active;

    return this[renderFuncName](classes);
  }
}

Button.propTypes = {
  onRender: React.PropTypes.func,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  disabled: React.PropTypes.bool,
  href: React.PropTypes.string,
  target: React.PropTypes.string,
  type: React.PropTypes.oneOf(TYPES),
  bsStyle: React.PropTypes.string,
  bsSize: React.PropTypes.string,
  block: React.PropTypes.bool,
  active: React.PropTypes.bool
};

Button.defaultProps = {
  active: false,
  block: false,
  disabled: false
};

export default Button;
