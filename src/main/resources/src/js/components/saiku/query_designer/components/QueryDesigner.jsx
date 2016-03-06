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
import Clearfix from '../../../bootstrap/Clearfix';
import Wrapper from '../../Wrapper';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CubeSelector from './CubeSelector';
import DimensionsList from './DimensionsList';
import MeasuresList from './MeasuresList';
import ReportPreview from './ReportPreview';

/**
 * Saiku Query Designer. This component displays the OLAP cubes, registed with
 * Saiku, with its dimension and measure information. The user is able to drag
 * them in order to compose a query to build a report. The query designer also
 * displays a live report.
 */
class QueryDesigner extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-page"></div>
        <Clearfix />

        <Wrapper className="query-designer">
          <Col xs={6}>
            <div className="content-box">
              <div className="panel-heading">
                <h4 className="text-center">Saiku Query Designer</h4>
              </div>
              <div className="panel-body">
                <Col xs={6}>
                  <CubeSelector/>
                </Col>
                <Col xs={6}>
                  <Row>
                    <DimensionsList/>
                  </Row>
                  <Row>
                    <MeasuresList/>
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
                <ReportPreview/>
              </div>
            </div>
          </Col>
        </Wrapper>
      </div>
    );
  }
}

/**
 * The <QueryDesigner/> component is decorated by the DragDropContext react-dnd
 * function. It also specifies that it is using the HTML5Backend as the drag and
 * drop implementation. The rect-dnd module also provides other implementations.
 */
export default DragDropContext(HTML5Backend)(QueryDesigner);
