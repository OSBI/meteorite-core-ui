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
import CubesStore from '../stores/CubesStore';
import SelectedDimensionsStore from '../stores/SelectedDimensionsStore';
import SelectedMeasuresStore from '../stores/SelectedMeasuresStore';

/**
 * This component displays a tree of OLAP cubes, retrived from server, via
 * stores/CubesStore. An OLAP component is composed by dimensions and measures,
 * displayed, respectively, by <Dimension/> and <Measure/> components.
 */
class CubeSelector extends React.Component {
  /**
   * Component's constructor, responsbile for setting its initial state, which
   * contains the cube data, which cubes and measures are selected. This
   * information is retrived from stores/CubesStore,
   * stores/SelectedDimensionsStore and stores/SelectedMeasuresStore.
   */
  constructor(props) {
    super(props);

    this.state = {
      cubes: CubesStore.getCubes(),
      selectedDimensions: SelectedDimensionsStore.getSelectedDimensions(),
      selectedMeasures: SelectedMeasuresStore.getSelectedMeasures()
    };

    autoBind(this);
  }

  /**
   * This method is automatically called be React runtime when the component is
   * filled with data and rendered (mounted). It registers this component as a
   * listener of the stores, so, if any change happened to them, the component
   * is notified.
   */
  componentDidMount() {
    CubesStore.addChangeListener(this._cubesChanged);
    SelectedDimensionsStore.addChangeListener(this._selectedDimensionsChanged);
    SelectedMeasuresStore.addChangeListener(this._selectedMeasuresChanged);
  }

  /**
   * This method is called automatically when the component is to be removed
   * from HTML DOM. It removes the change listeners associated to this component
   * to avoid memory leaks.
   */
  componentWillUnmount() {
    CubesStore.removeChangeListener(this._cubesChanged);
    SelectedDimensionsStore.removeChangeListener(
      this._selectedDimensionsChanged);
    SelectedMeasuresStore.removeChangeListener(this._selectedMeasuresChanged);
  }

  /**
   * Method called whenever a change on cubes data happens.
   */
  _cubesChanged() {
    this.setState({
      cubes: CubesStore.getCubes()
    });
  }

  /**
   * Method called whenever a change on selected dimensions happens.
   */
  _selectedDimensionsChanged() {
    this.setState({
      selectedDimensions: SelectedDimensionsStore.getSelectedDimensions()
    });
  }

  /**
   * Method called whenever a change on selected measures happens.
   */
  _selectedMeasuresChanged() {
    this.setState({
      selectedMeasures: SelectedMeasuresStore.getSelectedMeasures()
    });
  }

  /**
   * CubeSelector component render method. It creates a <Panel/> component with
   * a class 'drop-panel' and, for each cube, it than calls the _renderTreeNode
   * function.
   */
  render() {
    return (
      <Panel header="Cubes" bsStyle="success" className="drop-panel">
        {this.state.cubes.map(this._renderTreeNode)}
      </Panel>
    );
  }

  /**
   * Method called for each cube, in order to render its information, as a tree
   * node, and the information of its dimensions and measures as children of
   * this node.
   * @param {Object} data - object containing cube's information.
   */
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
  /**
   * This method renders the dimension information as a tree node (child of a
   * cube's tree node). For each dimension, it will call the _renderDimension
   * function.
   * @param {Object[]} data - array containing cube's dimensions.
   */
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

  /**
   * Method that will render a dimension, displaying a <Dimension/> component,
   * if it is visible, determined by the _isDimensionVisible method.
   * @param {Object} data - object containing dimension information.
   */
  _renderDimension(data) {
    let id = 'dimension_' + data.name;

    if (this._isDimensionVisible(id)) {
      return (
        <Dimension id={id} key={id} name={data.name}/>
      );
    }
  }

  /**
   * A dimension should be displayed if, and only if, is not selected. In other
   * words, if it is not on <DimensionsList/> component. This is a simple helper
   * method which returns true if a dimension is not selected.
   * @param {string} dimensionId - The id of the dimension which visibility is
   * to be determined.
   */
  _isDimensionVisible(dimensionId) {
    return !SelectedDimensionsStore.isSelected({id: dimensionId});
  }

  // Measures functions
  /**
   * This method renders the measure information as a tree node (child of a
   * cube's tree node). For each measure, it will call the _renderMeasure
   * function.
   * @param {Object[]} data - array containing cube's measures.
   */
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

  /**
   * Method that will render a measure, displaying a <Measure/> component,
   * if it is visible, determined by the _isMeasureVisible method.
   * @param {Object} data - object containing measure information.
   */
  _renderMeasure(data) {
    let id = 'measure_' + data.name;

    if (this._isMeasureVisible(id)) {
      return (
        <Measure id={id} key={id} name={data.name}/>
      );
    }
  }

  /**
   * A measure should be displayed if, and only if, is not selected. In other
   * words, if it is not on <MeasuresList/> component. This is a simple helper
   * method which returns true if a measure is not selected.
   * @param {string} measureId - The id of the measure which visibility is to be
   * determined.
   */
  _isMeasureVisible(measureId) {
    return !SelectedMeasuresStore.isSelected({id: measureId});
  }
}

export default CubeSelector;
