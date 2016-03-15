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
import { DropTarget } from 'react-dnd';
import {
  Button,
  Panel
} from 'react-bootstrap';
import _ from 'underscore';
import AppDispatcher from '../../dispatcher/AppDispatcher';
import SelectedDimensionsStore from '../stores/SelectedDimensionsStore';
import {
  Actions,
  DropTypes
} from '../constants/Constants';

/**
 * The react-dnd module decorates components with a target object, containing a
 * drop function, which is automatically called whenever a draggable component
 * is released inside this. This drop function receives the draggable component
 * props information, and other drag and drop related data on a monitor object.
 * In this case, the drop function sends a 'SELECT_DIMENSION' action to the
 * app dispatcher, passing the dropped dimension information.
 */
const dimensionsTarget = {
  drop(props, monitor) {
    AppDispatcher.dispatch({
      type: Actions.SELECT_DIMENSION,
      dimension: monitor.getItem()
    });
  }
};

/**
 * The react-dnd module decorates components with a collect function, which is
 * automatically called before the component's render function. The collect aims
 * in adding drag and drop specific data (such as the drag target and dnd flags)
 * to component's props.
 */
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

/**
 * Component that displays the selected dimensions (dimensions that were
 * dragged to this component).
 */
class DimensionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._getUpdatedState();
    autoBind(this);
  }

  /**
   * This method is automatically called be React runtime when the component is
   * filled with data and rendered (mounted). It registers this component as a
   * listener of the stores, so, if any change happened to them, the component
   * is notified.
   */
  componentDidMount() {
    SelectedDimensionsStore.addChangeListener(this._onChange);
  }

  /**
   * This method is called automatically when the component is to be removed
   * from HTML DOM. It removes the change listeners associated to this component
   * to avoid memory leaks.
   */
  componentWillUnmount() {
    SelectedDimensionsStore.removeChangeListener(this._onChange);
  }

  /**
   * Method called whenever a change at stores/SelectedDimensionsStore happens.
   * In this case, when a dimension is selected or deselected.
   */
  _onChange() {
    this.setState(this._getUpdatedState());
  }

  /**
   * This method builds a fresh new state object, containing the selected
   * dimensions information, based on stores/SelectedDimensionsStore data.
   */
  _getUpdatedState() {
    return {dimensions: SelectedDimensionsStore.getSelectedDimensions()};
  }

  /**
   * <DimensionsList/> render function. It creates a <div> tag with a class
   * 'drop-panel'.
   */
  render() {
    return this.props.connectDropTarget(
      <div className="drop-panel">
        <Panel header="Dimensions" bsStyle="success">
          {this._renderDropArea()}
          {this.state.dimensions.map(this._renderDimension)}
        </Panel>
      </div>
    );
  }

  /**
   * Method called for each dimension, to render its information. The dimensions
   * are displayed as buttons, using <Button/> component. If they are clicked
   * the function _deleteDimension is than called.
   */
  _renderDimension(dimension, index) {
    return (
      <Button
        bsStyle="primary"
        key={'btn_dimension_' + dimension.id}
        onClick={(event) => this._deleteDimension(event, dimension)}
      >
        {dimension.name} ×
      </Button>
    );
  }

  /**
   * If there are no dimensions to show, this method is called. It displays
   * information to explain the user that she should drop dimenions here. This
   * method renders a <div/> tag with the class 'drop-area' and 'over' if a
   * dimension is being dragged over the area.
   */
  _renderDropArea() {
    if (_.isEmpty(this.state.dimensions)) {
      const over = this.props.isOver ? 'over' : '';

      return (
        <div className={'drop-area ' + over}>
          Drop dimensions here
        </div>
      );
    }
  }

  /**
   * Method called when a user clicks on a dimension. It sends an action to the
   * app dispacher, with the type DESELECT_DIMENSION and the dimension data.
   */
  _deleteDimension(event, dimension) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    AppDispatcher.dispatch({
      type: Actions.DESELECT_DIMENSION,
      dimension: dimension
    });
  }
}

DimensionsList.propTypes = {
  isOver: React.PropTypes.bool.isRequired,
  connectDropTarget: React.PropTypes.func.isRequired
};

/**
 * The react-dnd module provides the DropTarget decorator function which
 * receives a drag type string, a target object, a collect function and, the
 * component to be decorated. In this case, the <DimensionsList/> component.
 */
export default DropTarget(
  DropTypes.DIMENSION,
  dimensionsTarget,
  collect
)(DimensionsList);
