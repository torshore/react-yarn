import React from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';

const Main = React.createClass({
  render() {
    return (
      <div>
       <NavBar />
       {this.props.children}
        <h1>
          <Link to="/">Yarn</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;