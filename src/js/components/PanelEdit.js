import React from 'react';

class PanelEdit extends React.Component {



  render() {
    console.log(this.props.row)
    return(
      <div>
        <div className="smallPicture">
          <img className="smallPicture" src={this.props.row[7]}/>
        </div>
      </div>
    )
  }
}




export default PanelEdit
