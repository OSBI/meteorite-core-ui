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
import SelectedMeasuresStore from './stores/SelectedMeasuresStore';
import {
  Actions,
  DropTypes
} from './Constants';

const measuresTarget = {
  drop(props, monitor) {
    AppDispatcher.dispatch({
      type: Actions.SELECT_MEASURE,
      measure: monitor.getItem()
    });
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class MeasuresList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._getUpdatedState();
    autoBind(this);
  }

  componentDidMount() {
    SelectedMeasuresStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    SelectedMeasuresStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this._getUpdatedState());
  }

  _getUpdatedState() {
    return {measures: SelectedMeasuresStore.getSelectedMeasures()};
  }

  render() {
    return this.props.connectDropTarget(
      <div className="drop-panel">
        <Panel header="Measures" bsStyle="success">
          {this._renderDropArea()}
          {this.state.measures.map(this._renderMeasure)}
        </Panel>
      </div>
    );
  }

  _renderMeasure(measure, index) {
    return (
      <Button
        bsStyle="primary"
        key={'btn_measure_' + measure.id}
        onClick={(event) => this._deleteMeasure(event, measure)}
      >
        {measure.name} ×
      </Button>
    );
  }

  _renderDropArea() {
    if (_.isEmpty(this.state.measures)) {
      const over = this.props.isOver ? 'over' : '';

      return (
        <div className={'drop-area ' + over}>
          Drop measures here
        </div>
      );
    }
  }

  _deleteMeasure(event, measure) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    AppDispatcher.dispatch({
      type: Actions.DESELECT_MEASURE,
      measure: measure
    });
  }
}

MeasuresList.propTypes = {
  isOver: React.PropTypes.bool.isRequired,
  connectDropTarget: React.PropTypes.func.isRequired
};

export default DropTarget(
  DropTypes.MEASURE,
  measuresTarget,
  collect
)(MeasuresList);
