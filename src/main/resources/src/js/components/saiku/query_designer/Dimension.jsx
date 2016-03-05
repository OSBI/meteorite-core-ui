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
import { DropTypes } from './Constants';
import { DragSource } from 'react-dnd';

const dimensionSource = {
  beginDrag(props) {
    return {
      id: props.id,
      name: props.name
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
    const {connectDragSource, id, name, isDragging} = this.props;

    let dragging = isDragging ? 'dragging' : '';

    return connectDragSource(
      <li className={'dimension ' + dragging} key={id}>
        {name}
      </li>
    );
  }
}

Dimension.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  connectDragSource: React.PropTypes.func.isRequired,
  isDragging: React.PropTypes.bool.isRequired
};

export default DragSource(
  DropTypes.DIMENSION,
  dimensionSource,
  collect
)(Dimension);
