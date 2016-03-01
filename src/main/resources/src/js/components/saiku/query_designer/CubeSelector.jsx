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

class CubeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDimensions: QueryState.dimensions
    };

    autoBind(this, '_renderTreeNode', '_renderDimension');
    QueryState.addDimensionsListener(this);
  }

  dimensionsChanged(dimensions) {
    this.setState({
      selectedDimensions: dimensions
    });
  }

  render() {
    return (
      <div>
        {this._fetchData().map(this._renderTreeNode)}
      </div>
    );
  }

  _renderTreeNode(data) {
    let id = _.uniqueId('treenode_');
    let label = <span className="node">{data.name}</span>;

    return (
      <TreeView key={id} nodeLabel={label} defaultCollapsed={false}>
        {data.children && data.children.map(this._renderTreeNode)}
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
    if (this._isVisible(data)) {
      return (
        <Dimension id={data.id} key={data.id}/>
      );
    }
  }

  _isVisible(dimension) {
    return !_.findWhere(QueryState.dimensions, {id: dimension.id});
  }

  _fetchData() {
    let dataSource = [
      {
        name: 'Cubes',
        children: [
          {
            name: 'Cube 1',
            children: [
              {
                name: 'Dimensions',
                dimensions: [
                  {name: 'D1', id: 'd1'},
                  {name: 'D2', id: 'd2'},
                  {name: 'D3', id: 'd3'}
                ]
              },
              {
                name: 'Measures',
                children: [
                  {name: 'M1'},
                  {name: 'M2'},
                  {name: 'M3'}
                ]
              }
            ]
          }
        ]
      }
    ];

    return dataSource;
  }
}

export default CubeSelector;
