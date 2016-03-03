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
  Navbar,
  ButtonToolbar,
  Button
} from 'react-bootstrap';

class ToolbarReporting extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Form pullLeft>
          <Button>show/hide</Button>
        </Navbar.Form>
        <Navbar.Form pullRight>
          <ButtonToolbar>
            <Button>view sql</Button>
            <Button>run</Button>
            <Button>ok</Button>
          </ButtonToolbar>
        </Navbar.Form>
      </Navbar>
    );
  }
}

export default ToolbarReporting;
