import React from 'react';

class Component extends React.Component {
  render() {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <p>Hello World :D</p>
    );
  }
}

Component.propTypes = {
  onRender: React.PropTypes.func
};

export default Component;
