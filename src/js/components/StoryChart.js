import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import { getRow } from '../actions/index';
import { connect } from 'react-redux';
import StoryEdit from './StoryEdit.js'
import createFragment from 'react-addons-create-fragment'
import { Modal, Button } from 'react-materialize';



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
        array.push(row.path_to.toString(), row.index.toString(), row.panel_title.toString())
        return array
      });
      return result;
    }


  render() {
    let rowsData = this.columnRow(this.props.rows);

    console.log('ROWS DATA', rowsData);
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

           <Modal
            header='Modal Header'
            trigger={
              <Button waves='light'>Chapter 1 : The Beginning</Button>
              }>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum
            </p>

          </Modal>
          <StoryEdit rows={rowsData}/>
        </div>
    );


 }
}





function mapStateToProps(state) {
  return{rows: state.rows.rows};

}

export default connect(mapStateToProps)(StoryChart);

