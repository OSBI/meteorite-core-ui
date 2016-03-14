/**
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
import classNames from 'classnames';

class Icon extends React.Component {
  render() {
    let {
      name, fixed, spin, pulse,
      size, rotate, flip
    } = this.props;
    let className = classNames(this.props.className, {
      [this.props.faClass]: true,
      [`fa-${name}`]: true,
      ['fa-fw']: fixed,
      ['fa-spin']: spin,
      ['fa-pulse']: pulse
    });

    if (size) {
      className = `${className} fa-${size}`;
    }

    if (rotate) {
      className = `${className} fa-rotate-${rotate}`;
    }

    if (flip) {
      className = `${className} fa-flip-${flip}`;
    }

    return (
      <i {...this.props} className={className}></i>
    );
  }
}

Icon.propTypes = {
  className: React.PropTypes.string,
  faClass: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  fixed: React.PropTypes.bool,
  spin: React.PropTypes.bool,
  pulse: React.PropTypes.bool,
  size: React.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
  rotate: React.PropTypes.oneOf(['45', '90', '135', '180',
    '225', '270', '315']),
  flip: React.PropTypes.oneOf(['horizontal', 'vertical'])
};

Icon.defaultProps = {
  faClass: 'fa',
  fixed: false,
  spin: false,
  pulse: false
};

export default Icon;
