import Grid from '../src/js/saiku/components/bootstrap/Grid.jsx';
import Row from '../src/js/saiku/components/bootstrap/Row.jsx';
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;

var component;
var spy = sinon.spy();

describe('Given an instance of the <Row />', () => {
  describe('when we render the component', () => {
    before(() => {
      component = TestUtils.renderIntoDocument(
          <Grid onRender={ spy }>
            <Row>
              <p>My Row</p>
            </Row>
          </Grid>
        );
    });
    it('should render a <div class="row">...</div>', () => {
      var div = TestUtils.scryRenderedDOMComponentsWithTag(component, 'div');

      expect(div).to.have.length.above(0, 'Expected to have element with tag <div>');
      expect(spy).to.be.calledOnce;
    });
  });
});
