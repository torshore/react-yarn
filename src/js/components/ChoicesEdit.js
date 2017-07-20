
import React from 'react';
import {Button} from 'react-materialize';

class ChoicesEdit extends React.Component {

  render(){
    console.log('haloo', this.props.choices)
    return (
                <div>
            { this.props.choices.map((choice, index) => {
              return (
                <div key={index} className="choice-box" >
                  <div  >

                      <input type="text"
                             defaultValue={choice.body_text}
                             name={choice.id}
                             onKeyUp={this.props.handleChoiceChange}
                             label={choice.story_id}
                             title={choice.panel_id}  />
                  </div>
                </div>
        )
      })}
            <Button floating className='grey' waves='light' icon='add' onClick={this.props.handleChoiceAdd} />
    </div>
    )
  }
}



export default ChoicesEdit;