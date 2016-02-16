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
import { History } from 'react-router';
import reactMixin from 'react-mixin';
import {
  Grid,
  Button,
  Clearfix
} from '../bootstrap/index';
import Icon from './Icon';

class MenuBar extends React.Component {
  onButtonMenu(event) {
    event.stopPropagation();
    this.props.openToolbar();
  }

  showLockScreen(event) {
    this.history.pushState(null, '/lockscreen/');
  }

  render() {
    return (
      <div className="topbar">
        <div className="topbar-left">
          <div className="text-center">
            <a href="#" className="logo">
              <img
                src="dist/assets/images/saiku/logo-small.png"
                width="40"
                height="40"
              />
            </a>
          </div>
        </div>

        <div className="navbar navbar-default" role="navigation">
          <Grid>
            <div className="">
              <div className="pull-left">
                <Button
                  className="button-menu-mobile open-left waves-effect"
                  onClick={this.onButtonMenu.bind(this)}
                >
                  <Icon name="navicon" />
                </Button>
                <Clearfix />
              </div>
              <ul className="nav navbar-nav hidden-xs">
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle waves-effect"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    File <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-animate">
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle waves-effect"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Edit <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-animate">
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle waves-effect"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Tools <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-animate">
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle waves-effect"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Views <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-animate">
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right pull-right">
                <li className="dropdown hidden-xs">
                  <a
                    href="#"
                    className=""
                    data-target="#"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <Icon name="bell-o" />
                    <span className="badge badge-xs badge-danger">3</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle profile waves-effect"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <img
                      src="dist/assets/images/users/user2.jpg"
                      className="img-circle"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-animate
                      drop-menu-right"
                  >
                    <li>
                      <a href="#">
                        <Icon name="user" /> Profile
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Icon name="gear" /> Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={this.showLockScreen.bind(this)}>
                        <Icon name="lock" /> Lock Screen
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Icon name="power-off" /> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

MenuBar.propTypes = {
  openToolbar: React.PropTypes.func.isRequired
};

reactMixin.onClass(MenuBar, History);

export default MenuBar;
