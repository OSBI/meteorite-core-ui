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
import Types from './Types';
import { DropTarget } from 'react-dnd';
import QueryState from './QueryState';

const style = {
  border: '1px solid black',
  padding: '5px'
};

const dimensionsTarget = {
  drop(props, monitor) {
    QueryState.addDimension(monitor.getItem());
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class DimensionList extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this, '_renderDimension');
  }

  render() {
    const {dimensions, connectDropTarget, isOver} = this.props;
    const background = isOver ? 'yellow' : 'white';

    return connectDropTarget(
      <div style={style}>
        <h1>Dimensions List</h1>
        <ul style={{background: background}}>
          {dimensions.map(this._renderDimension)}
        </ul>
      </div>
    );
  }

  _renderDimension(dimension, index) {
    return (
      <li key={'dlist_' + index}>
        <h4>
          {dimension.name}
          <button onClick={() => this._deleteDimension(dimension)}>×</button>
        </h4>
      </li>
    );
  }

  _deleteDimension(dimension) {
    QueryState.deleteDimension(dimension);
  }
}

DimensionList.propTypes = {
  isOver: React.PropTypes.bool.isRequired,
  connectDropTarget: React.PropTypes.func.isRequired,
  dimensions: React.PropTypes.array
};

export default DropTarget(
  Types.DIMENSION,
  dimensionsTarget,
  collect
)(DimensionList);
