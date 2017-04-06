import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';
import PanelEdit from './PanelEdit.js'



class StoryEdit extends Component {
  renderRows() {
    return this.props.rows.map((row, index) => {
      // console.log('this is row', row)
      return (
        <div key={index}>
          <Modal
            header={`Chapter ${row[2]} : ${row[3]}`}

            trigger={
              <Button waves='light'>{`Chapter ${row[5]} : ${row[3]}`}</Button>
              }>
              <div>
                <PanelEdit row={row}/>
              </div>

          </Modal>
        </div>
    )
  });
}
  render () {
    return(
      <div>
        {this.renderRows()}
      </div>
      )
  }
}
export default StoryEdit;