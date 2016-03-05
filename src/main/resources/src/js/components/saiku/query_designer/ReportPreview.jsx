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
import React from 'react';
import autoBind from 'react-autobind';
import { Table } from 'react-bootstrap';
import SelectedDimensionsStore from './stores/SelectedDimensionsStore';
import SelectedMeasuresStore from './stores/SelectedMeasuresStore';

class ReportPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dimensions: SelectedDimensionsStore.getSelectedDimensions(),
      measures: SelectedMeasuresStore.getSelectedMeasures()
    };

    autoBind(this);
  }

  componentDidMount() {
    SelectedDimensionsStore.addChangeListener(this._onChangeDimensions);
    SelectedMeasuresStore.addChangeListener(this._onChangeMeasures);
  }

  componentWillUnmount() {
    SelectedDimensionsStore.removeChangeListener(this._onChangeDimensions);
    SelectedMeasuresStore.removeChangeListener(this._onChangeMeasures);
  }

  _onChangeDimensions() {
    this.setState({
      dimensions: SelectedDimensionsStore.getSelectedDimensions()
    });
  }

  _onChangeMeasures() {
    this.setState({
      measures: SelectedMeasuresStore.getSelectedMeasures()
    });
  }

  render() {
    if (_.isEmpty(this.state.dimensions)) {
      return this._renderEmptyReportMessage();
    }
    else if (_.isEmpty(this.state.measures)) {
      return this._renderReport();
    }

    return (
      <div>
        {this.state.measures.map(this._renderReport)}
      </div>
    );
  }

  _renderEmptyReportMessage() {
    return (
      <h4>No data selected</h4>
    );
  }

  _renderReport(measure, index) {
    let data = ['Data 1', 'Data 2', 'Data 3'];

    return (
      <Table key={'table_' + index} striped bordered hover>
        <thead>
          <tr>
            {this.state.dimensions.map(this._renderColumn)}
          </tr>
        </thead>
        <tbody>
          {data.map(this._renderData)}
        </tbody>
        {measure && this._renderMeasure(measure)}
      </Table>
    );
  }

  _renderColumn(dimension, index) {
    return (
      <th key={'column_' + index}>{dimension.name}</th>
    );
  }

  _renderData(data, index) {
    return (
      <tr key={'row_' + index}>
        {this.state.dimensions.map(this._renderDimensionData)}
      </tr>
    );
  }

  _renderDimensionData(dimension, index) {
    return (
      <td key={'cell_' + dimension.id + '_' + index}>
        Data {index}
      </td>
    );
  }

  _renderMeasure(measure) {
    return (
      <tfoot>
        <tr>
          <td colSpan={this.state.dimensions.length - 1}>{measure.name}</td>
          <td>0.00</td>
        </tr>
      </tfoot>
    );
  }
}

export default ReportPreview;
