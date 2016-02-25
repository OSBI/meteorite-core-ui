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

import Backbone from 'backbone';
import ToolbarModel from '../models/ToolbarModel';

class ToolbarCollection extends Backbone.Collection {
  constructor(options) {
    super(options);

    this.model = ToolbarModel;
  }

  url() {
    // TODO: Add a `const` in Settings.js
    return 'http://localhost:9999/toolbar';
  }
}

export default ToolbarCollection;
