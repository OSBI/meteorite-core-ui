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
  Button,
  Clearfix
} from '../bootstrap/index';

class Toolbar extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="topbar">
          <div className="topbar-left">
            <div className="text-center">
              <a href="#" className="logo">
                <img
                  src="dist/assets/images/saiku/logo-small.png"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </div>

          <div className="navbar navbar-default" role="navigation">
            <Grid>
              <div className="">
                <div className="pull-left">
                  <Button
                    className="button-menu-mobile open-left waves-effect"
                  >
                    <i className="fa fa-navicon"></i>
                  </Button>
                  <Clearfix />
                </div>
              </div>
            </Grid>
          </div>

        </div>
      </div>
    );
  }
}

export default Toolbar;
