import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';



class StoryEdit extends Component {



  renderRows() {
    return this.props.rows.map((row, index) => {
      // console.log('this is row', row)
      return (
      <div key={index}>
        <Modal
          header='Modal Header'
          trigger={
            <Button waves='light'>{row[0]}</Button>
            }>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum
          </p>

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