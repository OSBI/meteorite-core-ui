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
import {
  Row,
  Col,
  Table
} from 'react-bootstrap';
import { AutoAffix } from 'react-overlays';
import Wrapper from './Wrapper';
import Content from './Content';
import MenuBar from './MenuBar';
import Sidebar from './Sidebar';
import SidebarOlap from './SidebarOlap';
import Toolbar from './Toolbar';
import Tabs from './Tabs';
import Portlet from './Portlet';

class Workspace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenSidebar: false,
      tabs: [],
      selectedTab: null
    };

    autoBind(this, 'openSidebar');
  }

  openSidebar() {
    if (this.state.isOpenSidebar) {
      this.setState({
        isOpenSidebar: false
      });
    }
    else {
      this.setState({
        isOpenSidebar: true
      });
    }
  }

  render() {
    return (
      <Wrapper isOpenSidebar={this.state.isOpenSidebar}>
        <MenuBar openSidebar={this.openSidebar} />
        <Sidebar />
        <Content page>
          <Tabs createContent={this.createContent} />
        </Content>
      </Wrapper>
    );
  }

  createContent() {
    return (
      <Content>
        <Toolbar />
        <Row>
          <Col md={3}>
            <SidebarOlap />
          </Col>
          <div className="m-t-10">
            <Col md={3}>
              <AutoAffix viewportOffsetTop={70}>
                <div>
                  <Portlet title="Measures" />
                  <Portlet title="Columns" />
                  <Portlet title="Rows" />
                </div>
              </AutoAffix>
            </Col>
            <Col lg={6}>
              <AutoAffix viewportOffsetTop={70}>
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </AutoAffix>
            </Col>
          </div>
        </Row>
      </Content>
    );
  }
}

export default Workspace;
