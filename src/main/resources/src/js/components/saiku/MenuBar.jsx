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
import autoBind from 'react-autobind';
import { History } from 'react-router';
import reactMixin from 'react-mixin';
import _ from 'underscore';
import {
  Grid,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  MenuItem,
  Badge,
  Image
} from 'react-bootstrap';
import Clearfix from '../bootstrap/Clearfix';
import Icon from './Icon';
import Logo from './Logo';
import MenubarCollection from '../../collections/MenubarCollection';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      models: ''
    };

    this._menubarUI = new MenubarCollection();

    autoBind(this, 'onButtonMenu', 'showLockScreen', '_handleFetchUI');
    autoBind(this, '_renderMenu', '_renderSubMenu');
  }

  componentDidMount() {
    this._menubarUI.fetch({
      success: this._handleFetchUI
    });
  }

  _handleFetchUI(menubarUI) {
    this.setState({
      models: menubarUI.models[0]
    });
  }

  onButtonMenu(event) {
    event.stopPropagation();
    this.props.openSidebar();
  }

  showLockScreen(event) {
    this.history.pushState(null, '/lockscreen/');
  }

  _renderMenu(menu, index) {
    let key = _.uniqueId('menu_');
    let isVisible = !menu.visible ? 'hidden' : '';

    return (
      <NavDropdown
        id={key}
        key={key}
        eventKey={index}
        title={menu.name}
        className={isVisible}
      >
        {menu.subitem.map(this._renderSubMenu)}
      </NavDropdown>
    );
  }

  _renderSubMenu(submenu, index) {
    let key = _.uniqueId(`menu_item_${index}_`);
    let isVisible = !submenu.visible ? 'hidden' : '';

    return (
      <MenuItem
        id={key}
        key={key}
        eventKey={key}
        className={isVisible}
        href={submenu.action}
      >
        {submenu.name}
      </MenuItem>
    );
  }

  render() {
    let menus = (this.state && !(_.isEmpty(this.state.models))) ?
      this.state.models.getItem() : [];

    return (
      <div className="topbar">
        <div className="topbar-left">
          <div className="text-center">
            <a href="#" className="logo">
              <Logo
                srcSmall="../dist/assets/images/saiku/logo-small.svg"
                srcBig="../dist/assets/images/saiku/logo-big.svg"
                isOpenSidebar={this.props.isOpenSidebar}
              />
            </a>
          </div>
        </div>

        <Navbar role="navigation">
          <Grid>
            <div className="pull-left">
              <Button
                className="button-menu-mobile open-left"
                onClick={this.onButtonMenu}
              >
                <Icon name="navicon" />
              </Button>
              <Clearfix />
            </div>
            <Nav className="hidden-xs">
              {menus.map(this._renderMenu)}
            </Nav>
            <Nav className="navbar-right pull-right">
              <li className="dropdown hidden-xs">
                <a
                  href="#"
                  className=""
                  data-target="#"
                  data-toggle="dropdown"
                  aria-expanded="true"
                >
                  <Icon name="bell-o" />
                  <Badge className="badge-xs badge-danger">3</Badge>
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle profile"
                  data-toggle="dropdown"
                  aria-expanded="true"
                >
                  <Image
                    src="../dist/assets/images/users/user2.jpg"
                    circle
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
                    <a href="#" onClick={this.showLockScreen}>
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
            </Nav>
          </Grid>
        </Navbar>
      </div>
    );
  }
}

MenuBar.propTypes = {
  openSidebar: React.PropTypes.func.isRequired,
  isOpenSidebar: React.PropTypes.bool
};

reactMixin.onClass(MenuBar, History);

export default MenuBar;
