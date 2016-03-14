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
import Clearfix from '../bootstrap/Clearfix';
import Icon from './Icon';

class Portlet extends React.Component {
  render() {
    return (
      <div className="portlet">
        <div className="portlet-heading bg-lightdark">
          <h3 className="portlet-title">
            {this.props.title}
          </h3>
          <div className="portlet-widgets">
            {/*
            <a href="#">
              <Icon name="minus" />
            </a>
            <span className="divider"></span>
            */}
            <a href="#">
              <Icon name="caret-down" />
            </a>
          </div>
          <Clearfix />
        </div>
        <div className="panel-collapse">
          <div className="portlet-body">
            <ul>
              <li>Sum</li>
              <li>Count</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Portlet.propTypes = {
  title: React.PropTypes.string
};

export default Portlet;
