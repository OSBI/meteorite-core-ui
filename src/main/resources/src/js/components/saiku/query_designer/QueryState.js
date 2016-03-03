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
const listeners = [];

function addDimensionsListener(listener) {
  listeners.push(listener);
}

function _triggerDimensionsChanged() {
  listeners.forEach((listener) => {
    listener.dimensionsChanged(dimensions);
  });
}

function addDimension(dimension) {
  dimensions.push(dimension);
  _triggerDimensionsChanged();
}

function deleteDimension(dimension) {
  dimensions.splice(_.findWhere(dimensions, dimension), 1);
  _triggerDimensionsChanged();
}

export default {
  dimensions: dimensions,
  addDimensionsListener: addDimensionsListener,
  addDimension: addDimension,
  deleteDimension: deleteDimension
};
