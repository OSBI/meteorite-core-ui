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
import validation from 'react-validation-mixin';
import strategy from '../../utils/ReactValidatorStrategy';
import Session from '../../models/Session';
import {
  Row,
  Col,
  Input,
  Button
} from 'react-bootstrap';
import FormGroup from '../bootstrap/FormGroup';
import Clearfix from '../bootstrap/Clearfix';
import Wrapper from './Wrapper';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.validatorTypes = strategy.createSchema({
      username: 'required',
      password: 'required'
    });
    this.getValidatorData = this.getValidatorData.bind(this);
    this.renderHelpText = this.renderHelpText.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
    this.session = new Session();
  }

  getValidatorData() {
    return {
      username: this.refs.username.getValue(),
      password: this.refs.password.getValue()
    };
  }

  renderHelpText(message) {
    return (
      <span className="help-block">{message}</span>
    );
  }

  getClasses(field) {
    return !this.props.isValid(field) ? 'has-error' : '';
  }

  onSubmitLogin(event) {
    event.preventDefault();

    let credentials = {
      username: this.refs.username.getValue(),
      password: this.refs.password.getValue()
    };
    let onValidate = (error) => {
      if (!error) {
        this.session.login(credentials, this);
      }
    };

    this.props.validate(onValidate);
    // this.refs.loginForm.reset();
  }

  render() {
    return (
      <div>
        <div className="bg-page"></div>
        <Clearfix />

        <Wrapper page>
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
                onSubmit={this.onSubmitLogin}
                role="form"
              >
                <FormGroup>
                  <Col xs={12}>
                    <div className={this.getClasses('username')}>
                      <Input
                        type="text"
                        ref="username"
                        placeholder="Username"
                        onBlur={this.props.handleValidation('username')}
                        standalone
                      />
                      {this.renderHelpText(
                        this.props.getValidationMessages('username')
                      )}
                    </div>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col xs={12}>
                    <div className={this.getClasses('password')}>
                      <Input
                        type="password"
                        ref="password"
                        placeholder="Password"
                        onBlur={this.props.handleValidation('password')}
                        standalone
                      />
                      {this.renderHelpText(
                        this.props.getValidationMessages('password')
                      )}
                    </div>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col xs={6}>
                    <Input
                      type="checkbox"
                      label="Remember me"
                      labelClassName="checkbox-primary"
                      standalone
                    />
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
                      className="text-uppercase"
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
        </Wrapper>
      </div>
    );
  }
}

Login.propTypes = {
  errors: React.PropTypes.object,
  validate: React.PropTypes.func,
  isValid: React.PropTypes.func,
  handleValidation: React.PropTypes.func,
  getValidationMessages: React.PropTypes.func,
  clearValidations: React.PropTypes.func
};

reactMixin.onClass(Login, History);

export default validation(strategy)(Login);
