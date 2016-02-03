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
import { History } from 'react-router';
import reactMixin from 'react-mixin';
import Session from '../../models/Session';
import {
  Row,
  Col,
  FormGroup,
  Input,
  Button,
  Clearfix
} from '../bootstrap/index';

class Login extends React.Component {
  constructor() {
    super();

    this.session = new Session();
  }

  login(event) {
    event.preventDefault();

    let credentials = {
      username: this.refs.username.getValue(),
      password: this.refs.password.getValue()
    };

    this.session.login(credentials, this);

    this.refs.loginForm.reset();
    // this.history.pushState(null, '/workspace/');
  }

  render() {
    return (
      <div>
        <div className="bg-page"></div>
        <Clearfix />

        <div className="wrapper-page">
          <div className="content-box">
            <div className="panel-heading">
              <Col xs={3}>
                <img
                  src="dist/assets/images/saiku/logo-small.png"
                  width="40"
                  height="40"
                />
              </Col>
              <Col xs={9}>
                <h4 className="text-left">
                  Sign In to <strong>Saiku Analytics</strong>
                </h4>
              </Col>
              <Clearfix />
            </div>
            <div className="panel-body">
              <form
                className="form-horizontal m-t-20"
                ref="loginForm"
                onSubmit={this.login.bind(this)}
                role="form"
              >
                <FormGroup>
                  <Col xs={12}>
                    <Input
                      type="text"
                      ref="username"
                      placeholder="Username"
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col xs={12}>
                    <Input
                      type="password"
                      ref="password"
                      placeholder="Password"
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col xs={6}>
                    <div className="checkbox checkbox-primary">
                      <Input id="checkbox-signup" type="checkbox" />
                      <label htmlFor="checkbox-signup">Remember me</label>
                    </div>
                  </Col>
                  <Col xs={6} className="text-right">
                    <div className="checkbox">
                      <a href="#">Evaluation Login</a>
                    </div>
                  </Col>
                </FormGroup>
                <FormGroup className="text-center m-t-40">
                  <Col xs={12}>
                    <Button
                      type="submit"
                      bsStyle="default"
                      className="text-uppercase waves-effect waves-light"
                      block
                    >
                      Login
                    </Button>
                  </Col>
                </FormGroup>
              </form>
            </div>
          </div>
          <Row>
            <Col sm={12} className="text-center">
              <p>Saiku-4.0-SNAPSHOT</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

reactMixin.onClass(Login, History);

export default Login;
