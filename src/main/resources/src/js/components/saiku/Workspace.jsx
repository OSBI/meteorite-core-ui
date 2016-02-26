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
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import Wrapper from './Wrapper';
import Content from './Content';
import MenuBar from './MenuBar';
import Sidebar from './Sidebar';
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
        <Grid>
          <Row>
            <Col lg={3}>
              <Portlet title="Measures" />
              <Portlet title="Columns" />
              <Portlet title="Rows" />
            </Col>
          </Row>
        </Grid>
      </Content>
    );
  }
}

export default Workspace;
