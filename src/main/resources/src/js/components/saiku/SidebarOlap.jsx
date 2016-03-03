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
  Panel,
  Input
} from 'react-bootstrap';

class SidebarOlap extends React.Component {
  render() {
    return (
      <div>
        <Panel className="m-b-0 b-r-0">
          <Input
            type="select"
            placeholder="Select a cube"
          >
            <option value="">Select a cube</option>
          </Input>
        </Panel>
        <Panel header="Measures" className="sidebar-olap m-b-0 b-r-0">
          Panel content
        </Panel>
        <Panel header="Dimensions" className=" sidebar-olap m-b-0 b-r-0">
          Panel content
        </Panel>
      </div>
    );
  }
}

export default SidebarOlap;
