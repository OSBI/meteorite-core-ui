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
import _ from 'underscore';
import autoBind from 'react-autobind';
import TreeView from 'react-treeview';
import { Panel } from 'react-bootstrap';
import Dimension from './Dimension';
import Measure from './Measure';
import CubesStore from './stores/CubesStore';
import SelectedDimensionsStore from './stores/SelectedDimensionsStore';
import SelectedMeasuresStore from './stores/SelectedMeasuresStore';

class CubeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cubes: CubesStore.getCubes(),
      selectedDimensions: SelectedDimensionsStore.getSelectedDimensions(),
      selectedMeasures: SelectedMeasuresStore.getSelectedMeasures()
    };

    autoBind(this);
  }

  componentDidMount() {
    CubesStore.addChangeListener(this._cubesChanged);
    SelectedDimensionsStore.addChangeListener(this._selectedDimensionsChanged);
    SelectedMeasuresStore.addChangeListener(this._selectedMeasuresChanged);
  }

  _cubesChanged() {
    this.setState({
      cubes: CubesStore.getCubes()
    });
  }

  _selectedDimensionsChanged() {
    this.setState({
      selectedDimensions: SelectedDimensionsStore.getSelectedDimensions()
    });
  }

  _selectedMeasuresChanged() {
    this.setState({
      selectedMeasures: SelectedMeasuresStore.getSelectedMeasures()
    });
  }

  render() {
    return (
      <Panel header="Cubes" bsStyle="success" className="drop-panel">
        {this.state.cubes.map(this._renderTreeNode)}
      </Panel>
    );
  }

  _renderTreeNode(data) {
    let id = _.uniqueId('treenode_');
    let label = <span className="node">{data.name}</span>;

    return (
      <TreeView key={id} nodeLabel={label} defaultCollapsed={false}>
        {this._renderDimensions(data)}
        {this._renderMeasures(data)}
      </TreeView>
    );
  }

  // Dimensions functions
  _renderDimensions(data) {
    if (data.dimensions) {
      return (
        <TreeView nodeLabel="Dimensions" defaultCollapsed={false}>
          <ul>
            {data.dimensions.map(this._renderDimension)}
          </ul>
        </TreeView>
      );
    }
  }

  _renderDimension(data) {
    let id = 'dimension_' + data.name;

    if (this._isDimensionVisible(id)) {
      return (
        <Dimension id={id} key={id} name={data.name}/>
      );
    }
  }

  _isDimensionVisible(dimensionId) {
    return !SelectedDimensionsStore.isSelected({id: dimensionId});
  }

  // Measures functions
  _renderMeasures(data) {
    if (data.measures) {
      return (
        <TreeView nodeLabel="Measures" defaultCollapsed={false}>
          <ul>
            {data.measures.map(this._renderMeasure)}
          </ul>
        </TreeView>
      );
    }
  }

  _renderMeasure(data) {
    let id = 'measure_' + data.name;

    if (this._isMeasureVisible(id)) {
      return (
        <Measure id={id} key={id} name={data.name}/>
      );
    }
  }

  _isMeasureVisible(measureId) {
    return !SelectedMeasuresStore.isSelected({id: measureId});
  }
}

export default CubeSelector;
