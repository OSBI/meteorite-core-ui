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

class CubeSelector extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this, '_renderTreeNode');
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
      </TreeView>
    );
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
                children: [
                  {name: 'D1'},
                  {name: 'D2'},
                  {name: 'D3'}
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
