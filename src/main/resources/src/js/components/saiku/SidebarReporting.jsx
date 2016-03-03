/*
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by pagelicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import React from 'react';
import {
  Row,
  Col,
  Panel,
  Input,
  ButtonToolbar,
  ButtonGroup,
  Button
} from 'react-bootstrap';
import Icon from './Icon';

class SidebarReporting extends React.Component {
  renderSelectModels() {
    return (
      <div>
        <Input type="select">
          <option value="">models</option>
          <option value="">...</option>
        </Input>
        <Row>
          <Col md={7}>
            <Input
              type="search"
              placeholder="search"
            />
          </Col>
          <Col md={5}>
            <ButtonToolbar>
              <ButtonGroup>
                <Button><Icon name="plus" /></Button>
                <Button><Icon name="minus" /></Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
      </div>
    );
  }

  renderQueries() {
    return (
      <div className="m-b-10">
        <span>Queries</span>
        <div className="pull-right">
          <ButtonToolbar>
            <ButtonGroup>
              <Button><Icon name="plus" /></Button>
              <Button><Icon name="minus" /></Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Panel
          className="sidebar-olap m-b-0 b-radius-0"
          header={this.renderSelectModels()}
        >
          Panel Content
        </Panel>
        <Panel
          className="sidebar-olap m-b-0 b-radius-0"
          header={this.renderQueries()}
        >
          Panel Content
        </Panel>
      </div>
    );
  }
}

export default SidebarReporting;
