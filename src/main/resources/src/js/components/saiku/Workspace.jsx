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
import Grid from '../bootstrap/Grid';
import Row from '../bootstrap/Row';
import Col from '../bootstrap/Col';
import Wrapper from './Wrapper';
import Content from './Content';
import MenuBar from './MenuBar';
import Toolbar from './Toolbar';
import Tab from './Tab';
import Tabs from './Tabs';

class Workspace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenToolbar: false
    };
  }

  openToolbar() {
    if (this.state.isOpenToolbar) {
      this.setState({
        isOpenToolbar: false
      });
    }
    else {
      this.setState({
        isOpenToolbar: true
      });
    }
  }

  render() {
    return (
      <Wrapper isOpenToolbar={this.state.isOpenToolbar}>
        <MenuBar openToolbar={this.openToolbar.bind(this)} />
        <Toolbar />
        <Content page>
          <Tabs>
            <Tab eventKey={1} title="Workspace">
              <Content>
                <Grid>
                  <Row>
                    <Col sm={12}>
                      <h4>Workspace</h4>
                    </Col>
                  </Row>
                </Grid>
              </Content>
            </Tab>
            <Tab eventKey={2} title="Tab 2">
              <Content><h1>Sample Tab 2</h1></Content>
            </Tab>
            <Tab eventKey={3} title="Tab 3">
              <Content><h1>Sample Tab 3</h1></Content><
            /Tab>
          </Tabs>
        </Content>
      </Wrapper>
    );
  }
}

export default Workspace;
