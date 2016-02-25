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
import Tab from './Tab';
import Tabs from './Tabs';
import Portlet from './Portlet';

class Workspace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenSidebar: false,
      tabs: []
    };

    autoBind(this, 'openSidebar');
  }

  componentDidMount() {
    // Simple example showing how to add tabs via function
    for (let i = 0; i < 5; i++) {
      this.addTab('New Tab ' + i, (
        <Content>
          <h1>Tab {i} added programatically via addTab function</h1>
        </Content>
      ));
    }
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

  addTab(title, component) {
    this.state.tabs.push({
      title: title,
      component: component
    });

    this.setState({
      tabs: this.state.tabs
    });
  }

  render() {
    return (
      <Wrapper isOpenSidebar={this.state.isOpenSidebar}>
        <MenuBar openSidebar={this.openSidebar} />
        <Sidebar />
        <Content page>
          <Tabs>
            <Tab tabKey="tab_1" title="Workspace">
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
            </Tab>
            {this.renderTabs()}
          </Tabs>
        </Content>
      </Wrapper>
    );
  }

  renderTabs() {
    return this.state.tabs.map((tabData, idx) => {
      let tabKey = 'tab_' + idx + '_' + (new Date()).getTime();

      return (
        <Tab key={tabKey} tabKey={tabKey} title={tabData.title}>
          {tabData.component}
        </Tab>
      );
    });
  }
}

export default Workspace;
