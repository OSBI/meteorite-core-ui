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
import autoBind from 'react-autobind';
import { DropTarget } from 'react-dnd';
import {
  Button,
  Panel
} from 'react-bootstrap';
import _ from 'underscore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import SelectedDimensionsStore from './stores/SelectedDimensionsStore';
import {
  Actions,
  DropTypes
} from './Constants';

const dimensionsTarget = {
  drop(props, monitor) {
    AppDispatcher.dispatch({
      type: Actions.SELECT_DIMENSION,
      dimension: monitor.getItem()
    });
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class DimensionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._getUpdatedState();
    autoBind(this);
  }

  componentDidMount() {
    SelectedDimensionsStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    SelectedDimensionsStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this._getUpdatedState());
  }

  _getUpdatedState() {
    return {dimensions: SelectedDimensionsStore.getSelectedDimensions()};
  }

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

export default DropTarget(
  DropTypes.DIMENSION,
  dimensionsTarget,
  collect
)(DimensionsList);
