/*
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import React from 'react';

/**
 * Saiku <Logo /> component.
 * This component should display a image the company.
 *
 * @example
 * <Logo
 *   source="dist/assets/images/saiku/logo-small.svg"
 *   width={40}
 *   height={40}
 * />
 */
class Logo extends React.Component {

  /**
   * React components implement the `render()` method that takes input data and
   * returns what to display. This method uses an XML-like syntax called JSX.
   * Input data that is passed into the component can be accessed by `render()`
   * via this.props.
   *
   * @return {HTMLElement|Node|String} An image the company.
   */
  render() {
    let source = this.props.source;
    let width = this.props.width;
    let height = this.props.height;

    if (this.props.isOpenSidebar) {
      source = source || this.props.sourceBig;
      width = width || 180;
      height = height || 30;
    }
    else {
      source = source || this.props.sourceSmall;
      width = width || 40;
      height = height || 40;
    }

    return (
      <img
        {...this.props}
        className={this.props.className}
        src={source}
        width={width}
        height={height}
      />
    );
  }
}

Logo.propTypes = {
  className: React.PropTypes.string,
  source: React.PropTypes.string,
  sourceSmall: React.PropTypes.string,
  sourceBig: React.PropTypes.string,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  isOpenSidebar: React.PropTypes.bool
};

export default Logo;
