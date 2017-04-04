import React from 'react';
import NavBar from './NavBar';


const App = React.createClass({
  render() {
    return (
      <div>

       {this.props.children}
      </div>
    )
  }
});

export default App;