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
import Dimension from './Dimension';
import QueryState from './QueryState';
import CubesCollection from '../../../collections/CubesCollection';

class CubeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDimensions: QueryState.dimensions,
      models: []
    };

    this._cubesUI = new CubesCollection();

    autoBind(this, '_renderTreeNode', '_renderDimension', '_handleFetchUI');
    QueryState.addDimensionsListener(this);
  }

  componentDidMount() {
    this._cubesUI.fetch({
      success: this._handleFetchUI
    });
  }

  dimensionsChanged(dimensions) {
    this.setState({
      selectedDimensions: dimensions
    });
  }

  _handleFetchUI(cubesUI) {
    this.setState({
      models: cubesUI.models[0]
    });
  }

  render() {
    let cubes = (this.state && !(_.isEmpty(this.state.models))) ?
      this.state.models.getCubes() : [];

    return (
      <div>
        {cubes.map(this._renderTreeNode)}
      </div>
    );
  }

  _renderTreeNode(data) {
    let id = _.uniqueId('treenode_');
    let label = <span className="node">{data.name}</span>;

    return (
      <TreeView key={id} nodeLabel={label} defaultCollapsed={false}>
        {this._renderDimensions(data)}
      </TreeView>
    );
  }

  _renderDimensions(data) {
    if (data.dimensions) {
      return (
        <ul>
          {data.dimensions.map(this._renderDimension)}
        </ul>
      );
    }
  }

  _renderDimension(data) {
    let id = 'dimension_' + data.name;

    if (this._isVisible(id)) {
      return (
        <Dimension id={id} key={id} name={data.name}/>
      );
    }
  }

  _isVisible(dimensionId) {
    return !_.findWhere(QueryState.dimensions, {id: dimensionId});
  }
}

export default CubeSelector;
