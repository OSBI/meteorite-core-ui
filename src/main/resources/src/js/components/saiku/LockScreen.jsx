import React from 'react';
import {
  Row,
  Col,
  FormGroup,
  Input,
  Button,
  Clearfix
} from '../bootstrap/index';

class LockScreen extends React.Component {
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
              <form className="text-center" role="form">
                <div className="user-thumb">
                  <img
                    src="dist/assets/images/users/user2.jpg"
                    className="img-responsive img-circle img-thumbnail"
                  />
                </div>
                <FormGroup>
                  <h3>Tom Barber</h3>
                  <p className="text-muted">
                    Enter your password to access the Saiku Analytics.
                  </p>
                  <div className="input-group m-t-30">
                    <Input
                      type="password"
                      ref="password"
                      placeholder="Password"
                      required
                    />
                    <span className="input-group-btn">
                      <Button
                        type="submit"
                        bsStyle="default"
                        className="w-sm waves-effect waves-light"
                        block
                      >
                        Unlock
                      </Button>
                    </span>
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
        </div>
      </div>
    );
  }
}

export default LockScreen;
