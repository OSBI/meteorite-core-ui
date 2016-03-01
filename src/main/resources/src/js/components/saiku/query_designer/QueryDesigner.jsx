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
  Row,
  Col
} from 'react-bootstrap';
import Clearfix from '../../bootstrap/Clearfix';
import Wrapper from '../Wrapper';
import CubeSelector from './CubeSelector';

class QueryDesigner extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-page"></div>
        <Clearfix />

        <Wrapper>
          <Col xs={6}>
            <div className="content-box">
              <div className="panel-heading">
                <h4 className="text-center">Saiku Query Designer</h4>
              </div>
              <div className="panel-body">
                <Col md={4} xs={6}>
                  <CubeSelector/>
                </Col>
                <Col md={4} xs={6}>
                  <Row>
                    <p>Dimensions</p>
                  </Row>
                  <Row>
                    <p>Measures</p>
                  </Row>
                </Col>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="content-box">
              <div className="panel-heading">
                <h4 className="text-center">Saiku Live Report Preview</h4>
              </div>
              <div className="panel-body">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Column 1</th>
                      <th>Column 2</th>
                      <th>Column 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Data 1</td><td>Data 2</td><td>Data 3</td></tr>
                    <tr><td>Data 1</td><td>Data 2</td><td>Data 3</td></tr>
                    <tr><td>Data 1</td><td>Data 2</td><td>Data 3</td></tr>
                    <tr><td>Data 1</td><td>Data 2</td><td>Data 3</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Wrapper>
      </div>
    );
  }
}

export default QueryDesigner;
