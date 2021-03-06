/**
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
import autoBind from 'react-autobind';
import validation from 'react-validation-mixin';
import strategy from 'react-validatorjs-strategy';
import {
  Row,
  Col,
  Input,
  Button,
  Image
} from 'react-bootstrap';
import FormGroup from '../components/bootstrap/FormGroup';
import Clearfix from '../components/bootstrap/Clearfix';
import Wrapper from '../components/saiku/Wrapper';
import Logo from '../components/saiku/Logo';

/**
 * The Lock Screen is used to create the form in which user will enter your
 * password to gain access in application.
 */
class LockScreen extends React.Component {
  constructor(props) {
    super(props);

    this.validatorTypes = strategy.createSchema({
      password: 'required'
    });

    autoBind(this, 'getValidatorData', 'renderHelpText', 'getClasses',
      'onSubmitLogin');
  }

  /**
   * Method that defines the data to validate your schema.
   *
   * @return {Object} An object with username and password.
   */
  getValidatorData() {
    return {
      password: this.refs.password.getValue()
    };
  }

  /**
   * Helper method that show a message.
   *
   * @param  {String} message - Text to be displayed on span tag.
   * @return {HTMLElement|Node|String} A block of help text that breaks
   *                                   into a new line.
   */
  renderHelpText(message) {
    return (
      <span className="help-block">{message}</span>
    );
  }

  /**
   * Method for get the field name the HTML element.
   *
   * @param  {String} field - Field name the HTML element.
   * @return {String}         Validation states.
   */
  getClasses(field) {
    return !this.props.isValid(field) ? 'has-error' : '';
  }

  /**
   * Method called when the Login button is pressed.
   *
   * @param {Object} event - The Event interface represents any
   *                         event of the DOM.
   */
  onSubmitLogin(event) {
    event.preventDefault();

    let onValidate = (error) => {
      if (!error) {
        this.props.history.pushState(null, '/workspace/');
      }
    };

    this.props.validate(onValidate);
  }

  /**
   * React components implement the `render()` method that takes input data and
   * returns what to display. This method uses an XML-like syntax called JSX.
   * Input data that is passed into the component can be accessed by `render()`
   * via this.props.
   *
   * @return {HTMLElement|Node|String} An image the company.
   */
  render() {
    return (
      <div>
        <div className="bg-page"></div>
        <Clearfix />

        <Wrapper page>
          <div className="content-box">
            <div className="panel-heading">
              <Col xs={3}>
                <Logo
                  src="../dist/assets/images/saiku/logo-small.svg"
                  width={40}
                  height={40}
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
                className="text-center"
                onSubmit={this.onSubmitLogin}
                role="form"
              >
                <div className="user-thumb">
                  <Image
                    src="../dist/assets/images/users/user2.jpg"
                    responsive
                    circle
                    thumbnail
                  />
                </div>
                <FormGroup>
                  <h3>Tom Barber</h3>
                  <p className="text-muted">
                    Enter your password to access the Saiku Analytics.
                  </p>
                  <div className={this.getClasses('password')}>
                    <div className="input-group m-t-30">
                      <Input
                        type="password"
                        ref="password"
                        placeholder="Password"
                        onBlur={this.props.handleValidation('password')}
                        standalone
                      />
                      <span className="input-group-btn">
                        <Button
                          type="submit"
                          className="w-sm"
                          block
                        >
                          Unlock
                        </Button>
                      </span>
                    </div>
                    {this.renderHelpText(
                      this.props.getValidationMessages('password')
                    )}
                  </div>
                </FormGroup>
                <FormGroup>
                  <Col xs={12} className="text-right">
                    <a href="#">Login with another account</a>
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

LockScreen.propTypes = {
  history: React.PropTypes.object,
  errors: React.PropTypes.object,
  validate: React.PropTypes.func,
  isValid: React.PropTypes.func,
  handleValidation: React.PropTypes.func,
  getValidationMessages: React.PropTypes.func,
  clearValidations: React.PropTypes.func
};

// Wrapped component with the validation mixin and supporting strategy.
export default validation(strategy)(LockScreen);
