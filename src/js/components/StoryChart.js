import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import { getRow } from '../actions/index';
import { connect } from 'react-redux';
import StoryEdit from './StoryEdit.js'



class StoryChart extends Component {
  constructor(props) {
    super(props);
    this.chartEvents = [
    {
      eventName: 'select',
      callback(Chart) {

        console.log('Selected', Chart.chart.getSelection());
      },
    },
    ]
  }

   componentDidMount() {
    this.props.dispatch(getRow(this.props.match.params.storyid));
    }

    columnRow = (dataFromDb) => {
      let result = dataFromDb.map((row, index) => {
        var array = [];
        array.push(row.path_to.toString(), row.panel_id.toString())
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
        ]}
          graph_id="OrgChart"
          width={'50%'}
          height={'50%'}
          legend_toggle
          chartEvents={this.chartEvents}
        />
        <StoryEdit rows={rowsData}/>
      </div>
    );


 }
}





function mapStateToProps(state) {
  return{rows: state.rows.rows};

}

export default connect(mapStateToProps)(StoryChart);

