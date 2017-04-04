import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import { getRow } from '../actions/index';
import { connect } from 'react-redux';







class StoryChart extends Component {


   componentDidMount() {
    console.log('dispatch method:', this.props.dispatch);
    this.props.dispatch(getRow(this.props.match.params.storyid));
    }


    columnRow = (dataFromDb) => {
      let result = dataFromDb.map((row) => {
        var array = [];
        array.push(row.path_to.toString(), row.panel_id.toString())
        return array
        });
      console.log(result);
      return result;
    }


  render() {
    let rowsData = this.columnRow(this.props.rows);
    if (rowsData.length == 0) {
      return <div />
    }
    return (
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
      ]}
        graph_id="OrgChart"
        width={'50%'}
        height={'50%'}
        legend_toggle
      />
    );
  }
}

function mapStateToProps(state) {
  return{rows: state.rows.rows};

}

export default connect(mapStateToProps)(StoryChart);

