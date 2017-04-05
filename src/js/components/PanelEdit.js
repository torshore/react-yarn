import React from 'react';
import { getPanel } from '../actions/index';
import { getChoices } from '../actions/index';
import { connect } from 'react-redux';
import Panel from './Panel.js';
import TextBox from './TextBox.js';

class PanelEdit extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPanel(this.props.row[6], this.props.row[1]));
    this.props.dispatch(getChoices(this.props.row[6], this.props.row[1]))
  }

  render() {
    console.log("rowdata", this.props.row)
    return(
      <div>
        <div className="smallPicture">
          <Panel panel={this.props.panel} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{panel: state.panel.panel,
         choices: state.choices.choices};

}

export default connect(mapStateToProps)(PanelEdit);
