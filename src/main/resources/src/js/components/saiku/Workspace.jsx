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
  Grid,
  Row,
  Col
} from '../bootstrap/index';
import Wrapper from './Wrapper';
import Content from './Content';
import MenuBar from './MenuBar';
import Toolbar from './Toolbar';

class Workspace extends React.Component {
  constructor() {
    super();

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
      /* <Wrapper className="enlarged forced"> */
      <Wrapper isOpenToolbar={this.state.isOpenToolbar}>
        <MenuBar openToolbar={this.openToolbar.bind(this)} />
        <Toolbar />
        <Content page>
          <Content>
            <Grid>
              <Row>
                <Col sm={12}>
                  <h4>Workspace</h4>
                </Col>
              </Row>
            </Grid>
          </Content>
        </Content>
      </Wrapper>
    );
  }
}

export default Workspace;
