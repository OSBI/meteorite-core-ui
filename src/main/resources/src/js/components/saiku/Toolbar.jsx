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
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';
import Icon from './Icon';

class Toolbar extends React.Component {
  render() {
    return (
      <Navbar className="toolbar">
        {/*
        <Navbar.Header>
          <Navbar.Text>Cubes</Navbar.Text>
        </Navbar.Header>
        */}
        <Nav>
          <NavItem eventKey={1} href="#"><Icon name="refresh" /></NavItem>
          <NavItem eventKey={1} href="#"><Icon name="folder" /></NavItem>
          <NavItem eventKey={2} href="#"><Icon name="save" /></NavItem>
          <NavItem eventKey={3} href="#"><Icon name="file-o" /></NavItem>
          <NavItem eventKey={4} href="#"><Icon name="pencil" /></NavItem>
          <NavItem eventKey={5} href="#"><Icon name="play" /></NavItem>
          <NavItem eventKey={6} href="#"><Icon name="step-forward" /></NavItem>
          <NavItem eventKey={7} href="#"><Icon name="retweet" /></NavItem>
          <NavItem eventKey={8} href="#"><Icon name="search" /></NavItem>
          <NavItem eventKey={9} href="#"><Icon name="file-excel-o" /></NavItem>
          <NavItem eventKey={10} href="#"><Icon name="file-code-o" /></NavItem>
          <NavItem eventKey={11} href="#"><Icon name="file-pdf-o" /></NavItem>
          <NavItem eventKey={12} href="#"><Icon name="edit" /></NavItem>
          <NavItem eventKey={13} href="#"><Icon name="link" /></NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Toolbar;
