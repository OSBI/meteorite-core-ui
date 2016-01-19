import React from 'react';

class Clearfix extends React.Component {
  render() {
    return (
      <div className={'clearfix'}></div>
    );
  }
}

Clearfix.propTypes = {
  className: React.PropTypes.string
};

export default Clearfix;
