import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import { getRow } from '../actions/index';
import { connect } from 'react-redux';
import StoryEdit from './StoryEdit.js'
import { Modal, Button, Col, Row } from 'react-materialize';
import { getPanels } from '../actions/index';
import NavBar from './NavBar';

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
    this.props.dispatch(getPanels(this.props.match.params.storyid));
  }

  columnRow = (dataFromDb) => {
    let result = dataFromDb.map((row, index) => {
      var array = [];
        array.push(row.index2.toString(), row.index.toString())
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
    <div>
       <NavBar/>
    </div>
  <div>
    <Row className="build">
      <Col m={3}>
        <h3 className="bldtitle2"> View Chapters: </h3>

        <StoryEdit panels={this.props.panels}/>
      </Col>
      <Col m={8} className="chart">
        <h3 className="bldtitle3">Story Paths:</h3>
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

      </Col>

      <Col m={1}/>

      <div>

      </div>
      </Row>
      <Row>
        <Col m={3}/>
        <Col m={8}>
              <div>
              <br/>
              <br/>
              <br/>
       <p className="instructions">
          <span>Welcome to your new Story! </span> <br/>
        <span>If you look up you can see a chart showing the branching paths of your adventure.</span> <br/>
        <span>To the left is an index showing all the chapters of your story. If you click the </span> <br/>
        <span>chapter, it'll bring you to a page where you can edit that chapter.</span> <br/>
         <span>   In that page, just fill in the form for image and text to update that panel. </span> <br/>
        <span>Create a new choice to make a new panel, and click that choice to go to that new panel.</span> <br/>
          <span>Happy Yarning! </span> <br/>
        </p>
        </div>
        </Col>
      </Row>

    </div>
    </div>
  );
 }
}

function mapStateToProps(state) {
  return{rows: state.rows.rows,
        panels: state.panels.panels}

}

export default connect(mapStateToProps)(StoryChart);

