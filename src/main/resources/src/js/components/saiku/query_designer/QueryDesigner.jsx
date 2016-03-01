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
} from 'react-bootstrap';
import Content from '../Content';
import CubeSelector from './CubeSelector';

class QueryDesigner extends React.Component {
  render() {
    return (
      <Content page>
        <Grid>
          <Row>
            <Col md={2} xs={3}>
              <CubeSelector/>
            </Col>
            <Col md={6} xs={8}>
              <Row>
                <p>Dimensions</p>
              </Row>
              <Row>
                <p>Measures</p>
              </Row>
            </Col>
          </Row>
        </Grid>
      </Content>
    );
  }
}

export default QueryDesigner;
