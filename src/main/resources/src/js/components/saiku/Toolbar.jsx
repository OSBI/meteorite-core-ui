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
import Icon from './Icon';
import Wrapper from './Wrapper';

class Toolbar extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="left side-menu">
          <div className="sidebar-inner slimscrollleft">
            <div className="sidebar-menu">
              <ul>
                <li className="">
                  <a href="#" className="waves-effect waves-light">
                    <Icon name="home" />
                    <span> Home </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Toolbar;
