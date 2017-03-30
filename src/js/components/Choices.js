import React from 'react';
import { Container } from 'react-bootstrap';

class Choices extends React.Component {
  render(){
    return (
      <div>
        { this.props.choices.map((choice) => {
          return (
            <div key={choice.id}>
              <div> {choice.body_text}
              </div>
            </div>
            )
        })}
      </div>
    )
  }
}

export default Choices;