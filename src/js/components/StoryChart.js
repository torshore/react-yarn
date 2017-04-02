import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import { getRow } from '../actions/index';
import { connect } from 'react-redux';







class StoryChart extends Component {


   componentDidMount() {

    this.props.dispatch(getRow(this.props.match.params.storyid));
    }


    columnRow = (dataFromDb) => {
      dataFromDb.map((row) => {
        var array = [];
        array.push(row.path_to.toString(), row.panel_id.toString())
        return array
        })
    }


  render() {
    return (
      <Chart
        chartType="OrgChart"
        rows={[
          ['2','1'],
          ['3','1'],
          ['4','1']


          ]}

        //{this.columnRow(this.props.rows)}
        columns={[
          {
            type: 'string',
            label: 'Child',
          },
          {
            type: 'string',
            label: 'Parent',
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

