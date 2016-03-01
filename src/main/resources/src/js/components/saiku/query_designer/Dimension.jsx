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
import Types from './Types';
import { DragSource } from 'react-dnd';

const style = {
  border: '1px solid black',
  background: '#ccc',
  color: 'red'
};

const dimensionSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Dimension extends React.Component {
  render() {
    const {connectDragSource, id} = this.props;

    return connectDragSource(
      <li style={style}>
        <h4>Dimension {id}</h4>
      </li>
    );
  }
}

Dimension.propTypes = {
  id: React.PropTypes.string,
  connectDragSource: React.PropTypes.func.isRequired,
  isDragging: React.PropTypes.bool.isRequired
};

export default DragSource(Types.DIMENSION, dimensionSource, collect)(Dimension);
