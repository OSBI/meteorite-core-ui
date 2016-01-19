import React from 'react';
import { Row, Col, FormGroup, Input, Button, Clearfix } from '../bootstrap/index';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-page"></div>
        <Clearfix />

        <div className="wrapper-page">
          <div className="content-box">
            <div className="panel-heading">
              <Col xs={3}>
                <img src="assets/images/logo-small.png" width="40" height="40" />
              </Col>
              <Col xs={9}>
                <h4 className="text-left">Sign In to <strong>Saiku Analytics</strong></h4>
              </Col>
              <Clearfix />
            </div>
            <div className="panel-body">
              <form className="form-horizontal m-t-20">
                <FormGroup>
                  <Col xs={12}>
                    <Input type="text" placeholder="Username" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col xs={12}>
                    <Input type="password" placeholder="Password" />
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
                    <div className="checkbox checkbox-primary">
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

export default Login;
