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
import Clearfix from '../bootstrap/Clearfix';
import Icon from './Icon';
import autoBind from 'react-autobind';
import _ from 'underscore';
import SidebarCollection from '../../collections/SidebarCollection';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      models: ''
    };

    this._sidebarUI = new SidebarCollection();

    autoBind(this, '_handleFetchUI', '_renderItem');
  }

  componentDidMount() {
    this._sidebarUI.fetch({
      success: this._handleFetchUI
    });
  }

  _handleFetchUI(sidebarUI) {
    this.setState({
      models: sidebarUI.models[0]
    });
  }

  _renderItem(item, index) {
    let key = _.uniqueId(`sidebar_item_${index}_`);

    return (
      <li id={key} key={key}>
        <a href={item.action}>
          <Icon name={item.icon} />
          <span> {item.name} </span>
        </a>
      </li>
    );
  }

  render() {
    let items = (this.state && !(_.isEmpty(this.state.models))) ?
      this.state.models.getItem() : [];

    return (
      <div className="fixed-left">
        <div className="side-menu left">
          <div className="sidebar-inner slimscrollleft">
            <div className="sidebar-menu">
              <ul>
                {items.map(this._renderItem)}
              </ul>
              <Clearfix />
            </div>
            <Clearfix />
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
