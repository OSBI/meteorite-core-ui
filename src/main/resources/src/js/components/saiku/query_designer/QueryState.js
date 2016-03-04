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

const dimensions = [];
const measures = [];
const dimensionsListeners = [];
const measuresListeners = [];

// Dimensions related functions
function addDimensionsListener(listener) {
  dimensionsListeners.push(listener);
}

function _triggerDimensionsChanged() {
  dimensionsListeners.forEach((listener) => listener(dimensions));
}

function addDimension(dimension) {
  dimensions.push(dimension);
  _triggerDimensionsChanged();
}

function deleteDimension(dimension) {
  dimensions.splice(_.findWhere(dimensions, dimension), 1);
  _triggerDimensionsChanged();
}

// Measures related functions
function addMeasuresListener(listener) {
  measuresListeners.push(listener);
}

function _triggerMeasuresChanged() {
  measuresListeners.forEach((listener) => listener(measures));
}

function addMeasure(measure) {
  measures.push(measure);
  _triggerMeasuresChanged();
}

function deleteMeasure(measure) {
  measures.splice(_.findWhere(measures, measure), 1);
  _triggerMeasuresChanged();
}

export default {
  dimensions: dimensions,
  addDimensionsListener: addDimensionsListener,
  addDimension: addDimension,
  deleteDimension: deleteDimension,
  measures: measures,
  addMeasuresListener: addMeasuresListener,
  addMeasure: addMeasure,
  deleteMeasure: deleteMeasure
};
