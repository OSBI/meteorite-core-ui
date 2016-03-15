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

import _ from 'underscore';
import autoBind from 'react-autobind';
import { EventEmitter } from 'events';
import AppDispatcher from '../../dispatcher/AppDispatcher';
import { Actions } from '../constants/Constants';

class SelectedDimensionsStoreFactory extends EventEmitter {
  constructor() {
    super();
    autoBind(this, 'select', 'deselect');

    this.selectedDimensions = [];
    this.actionDispatcher = {};

    this.actionDispatcher[Actions.SELECT_DIMENSION] = this.select;
    this.actionDispatcher[Actions.DESELECT_DIMENSION] = this.deselect;
  }

  isSelected(dimension) {
    return !!_.findWhere(this.selectedDimensions, dimension);
  }

  getSelectedDimensions() {
    return this.selectedDimensions;
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

  select(dimension) {
    this.selectedDimensions.push(dimension);
    this.emitChange();
  }

  deselect(dimension) {
    let dimensions = this.selectedDimensions;

    dimensions.splice(_.findWhere(dimensions, dimension), 1);
    this.emitChange();
  }
}

let SelectedDimensionsStore = new SelectedDimensionsStoreFactory();

AppDispatcher.register((payload) => {
  if (payload.type in SelectedDimensionsStore.actionDispatcher) {
    SelectedDimensionsStore.actionDispatcher[payload.type](payload.dimension);
  }
});

export default SelectedDimensionsStore;
