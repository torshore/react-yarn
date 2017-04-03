import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import { getRow } from '../actions/index';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class StoryChart extends Component {
  constructor(props) {
    super(props);
    this.chartEvents = [
    {
      eventName: 'select',
      callback(Chart) {
        console.log('Selected', Chart.chart.getSelection());
        <Link to={`/stories/${this.props.match.params.storyid}/panels/${this.props.match.params.panelid}`}></Link>
      },
    },
    ]
  }

   componentDidMount() {

    this.props.dispatch(getRow(this.props.match.params.storyid));
    }


    columnRow = (dataFromDb) => {
      console.log(dataFromDb)
      let result = dataFromDb.map((row) => {
        var array = [];
        array.push(row.path_to.toString(), row.panel_id.toString())
        return array
        });
      console.log(result);
      return result;
    }


  render() {
    console.log('shutest', this, this.props);
    let rowsData = this.columnRow(this.props.rows);
    if (rowsData.length == 0) {
      return <div />
    }
    return (
      <Chart
        chartType="OrgChart"
        rows= {rowsData}
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
    );
  }
}

function mapStateToProps(state) {
  return{rows: state.rows.rows};

}

export default connect(mapStateToProps)(StoryChart);

