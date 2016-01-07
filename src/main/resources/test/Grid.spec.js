import Grid from '../src/js/saiku/components/bootstrap/Grid.jsx';
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;

var component;
var spy = sinon.spy();

describe('Given an instance of the Component', () => {
  describe('when we render the component', () => {
    before(() => {
      component = TestUtils.renderIntoDocument(
          <Grid onRender={ spy }>
            <div className="row">
              <p>My Grid</p>
            </div>
          </Grid>
        );
    });
    it('should render a div', () => {
      var div = TestUtils.scryRenderedDOMComponentsWithTag(component, 'div');

      expect(div).to.have.length.above(0, 'Expected to have element with tag <div>');
      expect(spy).to.be.calledOnce;
    });
  });
});
