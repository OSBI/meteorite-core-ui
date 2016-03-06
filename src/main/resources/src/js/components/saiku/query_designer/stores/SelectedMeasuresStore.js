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

import _ from 'underscore';
import autoBind from 'react-autobind';
import { EventEmitter } from 'events';
import AppDispatcher from '../../dispatcher/AppDispatcher';
import { Actions } from '../constants/Constants';

class SelectedMeasuresStoreFactory extends EventEmitter {
  constructor() {
    super();
    autoBind(this, 'select', 'deselect');

    this.selectedMeasures = [];
    this.actionDispatcher = {};

    this.actionDispatcher[Actions.SELECT_MEASURE] = this.select;
    this.actionDispatcher[Actions.DESELECT_MEASURE] = this.deselect;
  }

  isSelected(measure) {
    return !!_.findWhere(this.selectedMeasures, measure);
  }

  getSelectedMeasures() {
    return this.selectedMeasures;
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

  select(measure) {
    this.selectedMeasures.push(measure);
    this.emitChange();
  }

  deselect(measure) {
    let measures = this.selectedMeasures;

    measures.splice(_.findWhere(measures, measure), 1);
    this.emitChange();
  }
}

let SelectedMeasuresStore = new SelectedMeasuresStoreFactory();

AppDispatcher.register((payload) => {
  if (payload.type in SelectedMeasuresStore.actionDispatcher) {
    SelectedMeasuresStore.actionDispatcher[payload.type](payload.measure);
  }
});

export default SelectedMeasuresStore;
