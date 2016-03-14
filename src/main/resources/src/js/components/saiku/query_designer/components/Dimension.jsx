/**
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
import { DropTypes } from '../constants/Constants';
import { DragSource } from 'react-dnd';

/**
 * The react-dnd module decorates components with a source object, containing a
 * beginDrag function, which is automatically called whenever this component is
 * being dragged. This function should fill an object with data relevant to the
 * drop area component, in this case, the dimension's id and its name.
 */
const dimensionSource = {
  beginDrag(props) {
    return {
      id: props.id,
      name: props.name
    };
  }
};

/**
 * The react-dnd module decorates components with a collect function, which is
 * automatically called before the component's render function. The collect aims
 * in adding drag and drop specific data (such as the drag source and dnd flags)
 * to component's props.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

/**
 * This component models a dimenion of an OLAP cube. This dimension is displayed
 * as a child of <CubeSelector/> component and it is draggable to the
 * <DimensionsList/> component.
 */
class Dimension extends React.Component {
  /**
   * Dimension's render function. It creates a <li> tag with a class 'dimension'
   * and, if it is being dragged, a 'dragging' class.
   */
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

/**
 * The react-dnd module provides the DragSource decorator function which
 * receives a drag type string, a source object, a collect function and, the
 * component to be decorated. In this case, the <Dimension/> component.
 */
export default DragSource(
  DropTypes.DIMENSION,
  dimensionSource,
  collect
)(Dimension);
