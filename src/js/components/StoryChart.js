import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import { getRow } from '../actions/index';
import { connect } from 'react-redux';
import StoryEdit from './StoryEdit.js'
import { Modal, Button } from 'react-materialize';
import { getPanels } from '../actions/index';

class StoryChart extends Component {
  constructor(props) {
    super(props);

    }



   componentDidMount() {
    this.props.dispatch(getRow(this.props.match.params.storyid));
    this.props.dispatch(getPanels(this.props.match.params.storyid));

    }


    columnRow = (dataFromDb) => {
      let result = dataFromDb.map((row, index) => {
        var array = [];
        array.push(row.index2.toString(), row.index.toString(), row.panel_title.toString())
        return array
      });
      return result;
    }



  render() {
    let rowsData = this.columnRow(this.props.rows);

    if (rowsData.length === 0) {
      return <div />
    }
    return (
        <div>
          <Chart
            chartType="OrgChart"
            rows={rowsData}
            columns={[
              {
                type: 'string',
                label: 'Child',
              },
              {
                type: 'string',
                label: 'Parent'
              },
              {
                type: 'string',
                label: 'Tooltip'
              }
          ]}
            graph_id="OrgChart"
            width={'50%'}
            height={'50%'}
            legend_toggle
            chartEvents={this.chartEvents}
          />


          <StoryEdit panels={this.props.panels}/>


        </div>
    );


 }
}





function mapStateToProps(state) {
  return{rows: state.rows.rows,
        panels: state.panels.panels}

}

export default connect(mapStateToProps)(StoryChart);

