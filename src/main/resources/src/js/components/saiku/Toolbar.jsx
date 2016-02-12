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
import { Clearfix } from '../bootstrap/index';
import Icon from './Icon';

class Toolbar extends React.Component {
  render() {
    return (
      <div className="side-menu left">
        <div className="sidebar-inner slimscrollleft">
          <div className="sidebar-menu">
            <ul>
              <li>
                <a href="#" className="waves-effect waves-light">
                  <Icon name="home" />
                  <span> Home </span>
                </a>
              </li>
              <li>
                <a href="#" className="waves-effect waves-light">
                  <Icon name="plus-square" />
                  <span> New Query </span>
                </a>
              </li>
              <li>
                <a href="#" className="waves-effect waves-light">
                  <Icon name="folder-open-o" />
                  <span> Open Query </span>
                </a>
              </li>
              <li>
                <a href="#" className="waves-effect waves-light">
                  <Icon name="file-text-o" />
                  <span> Reporting </span>
                </a>
              </li>
              <li>
                <a href="#" className="waves-effect waves-light">
                  <Icon name="dashboard" />
                  <span> Dashboard </span>
                </a>
              </li>
              <li>
                <a href="#" className="waves-effect waves-light">
                  <Icon name="cube" />
                  <span> Schema Designer </span>
                </a>
              </li>
              <li>
                <a href="#" className="waves-effect waves-light">
                  <Icon name="globe" />
                  <span> Translate </span>
                </a>
              </li>
              <li>
                <a href="#" className="waves-effect waves-light">
                  <Icon name="gear" />
                  <span> Admin Console </span>
                </a>
              </li>
              <li>
                <a href="#" className="waves-effect waves-light">
                  <Icon name="bug" />
                  <span> Send a bug </span>
                </a>
              </li>
            </ul>
            <Clearfix />
          </div>
          <Clearfix />
        </div>
      </div>
    );
  }
}

export default Toolbar;
