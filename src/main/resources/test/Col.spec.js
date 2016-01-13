import Grid from '../src/js/saiku/components/bootstrap/Grid.jsx';
import Row from '../src/js/saiku/components/bootstrap/Row.jsx';
import Col from '../src/js/saiku/components/bootstrap/Col.jsx';
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;

var component;
var spy = sinon.spy();

describe('Given an instance of the <Col />', () => {
  describe('when we render the component', () => {
    before(() => {
      component = TestUtils.renderIntoDocument(
          <Grid>
            <Row>
              <Col onRender={ spy } xs={12} md={8}>
                <p>My Col</p>
              </Col>
            </Row>
          </Grid>
        );
    });
    it('should render a <div class="col-md-8 col-xs-12">...</div>', () => {
      var div = TestUtils.scryRenderedDOMComponentsWithTag(component, 'div');

      expect(div).to.have.length.above(0, 'Expected to have element with tag <div>');
      expect(spy).to.be.calledOnce;
    });
  });
});
