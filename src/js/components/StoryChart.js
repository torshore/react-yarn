import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import { getRow } from '../actions/index';
import { connect } from 'react-redux';
import { Col, Row } from 'react-materialize';
import { getPanels } from '../actions/index';
import NavBar from './NavBar';

const storyEditLink = (storyid, panelindex) => {
  return fetch(`/stories/${storyid}/panels/chartshow/${panelindex}`)
    .then((response) => response.json())
    .then((data) => {
      console.log('hello', data.data[0].id)
      window.location.assign(`/stories/${storyid}/panels/${data.data[0].id}/edit`)
      })
    .catch(err => console.log(err))
  }



class StoryChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPanel: ""
    }
    this.getFirstPanelPanelText = this.getFirstPanelPanelText.bind(this)

  }

  getFirstPanelPanelText = () => {
    return fetch(`/stories/${this.props.match.params.storyid}/panels/`)
    .then((response) => response.json())
    .then((data) => {

      this.setState({firstPanel: data.data[0].body_text})

    })
    .catch(err => console.log(err))

  }

   componentDidMount() {
    this.props.dispatch(getRow(this.props.match.params.storyid));
    this.props.dispatch(getPanels(this.props.match.params.storyid));
    this.getFirstPanelPanelText()

  }

  columnRow = (dataFromDb) => {
    let result = dataFromDb.map((row, index) => {
      var array = [];

        array.push(row.index2.toString(), row.index.toString(), row.panel_text)
        return array
    });
      return result;

  }
  render() {
    let rowsData = this.columnRow(this.props.rows);
    rowsData.unshift(["1", "", `${this.state.firstPanel}`])
        const story_id = this.props.match.params.storyid

    this.chartEvents = [
    {
      eventName: 'select',
      callback(Chart) {

        storyEditLink(story_id, Chart.chart.getSelection()[0].row + 1)
      },
    }

    ]

  return (
    <div>
      <div>
         <NavBar/>
      </div>
    <div>
      <Row className="build">
        <Col m={3}>

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

        </Col>


        <Col m={1}/>
        </Row>

        <Row>
          <Col m={3}/>
          <Col m={8}>
                <div>
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

