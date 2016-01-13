import Grid from '../src/js/saiku/components/bootstrap/Grid.jsx';
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;

var component;
var spy = sinon.spy();

describe('Given an instance of the <Grid />', () => {
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
    it('should render a <div class="container">...</div>', () => {
      var div = TestUtils.scryRenderedDOMComponentsWithTag(component, 'div');

      expect(div).to.have.length.above(0, 'Expected to have element with tag <div>');
      expect(spy).to.be.calledOnce;
    });
  });
  // describe('when we render the component with fluid attribute', () => {
  //   before(() => {
  //     component = TestUtils.renderIntoDocument(
  //         <Grid fluid>
  //           <div className="row">
  //             <p>My Grid</p>
  //           </div>
  //         </Grid>
  //       );
  //   });
  //   it('should render a <div class="container-fluid">...</div>', () => {
  //     var div = TestUtils.scryRenderedDOMComponentsWithTag(component, 'div');

  //     expect(div).to.have.length.above(0, 'Expected to have element with tag <div>');
  //     expect(spy).to.be.calledOnce;
  //   });
  // });
});
