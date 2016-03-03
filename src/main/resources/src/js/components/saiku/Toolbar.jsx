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
import autoBind from 'react-autobind';
import _ from 'underscore';
import {
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import Icon from './Icon';
import ToolbarCollection from '../../collections/ToolbarCollection';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      models: ''
    };

    this._toolbarUI = new ToolbarCollection();

    autoBind(this, '_handleFetchUI');
  }

  componentDidMount() {
    this._toolbarUI.fetch({
      success: this._handleFetchUI
    });
  }

  _handleFetchUI(toolbarUI) {
    this.setState({
      models: toolbarUI.models[0]
    });
  }

  _renderNavItem(item, key) {
    let tooltip = (
      <Tooltip>{item.name}</Tooltip>
    );
    let isItemVisible = !item.visible ? 'hidden' : '';

    return (
      <NavItem key={key} eventKey={key} className={isItemVisible} href="#">
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <Icon name={item.icon} />
        </OverlayTrigger>
      </NavItem>
    );
  }

  render() {
    let items = (this.state && !(_.isEmpty(this.state.models))) ?
      this.state.models.getItem() : [];

    return (
      <Navbar className="toolbar">
        <Row>
          <Col md={3}>
            <Navbar.Header>
              <Navbar.Text>Cubes</Navbar.Text>
            </Navbar.Header>
          </Col>
          <Col md={9}>
            <Nav>
              {items.map(this._renderNavItem)}
            </Nav>
          </Col>
        </Row>
      </Navbar>
    );
  }
}

export default Toolbar;
