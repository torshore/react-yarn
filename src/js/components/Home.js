import React from 'react';
import { Col, Row} from 'react-materialize';


const Home = React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Yarn</h1>
        <div>
        <Row>
          <Col m={1}/>
          <Col m={3}>
            <a href="/new">
              <img className="btn-build" src="/bulb.png" alt="link"/>
              <h3 className="link"> BUILD!  </h3>
            </a>
          </Col>
          <Col m={4}/>
          <Col m={3}>
            <a href="/stories">
              <img className="btn2" src="/controller.png" alt="link"/>
              <h3 className="link">PLAY!</h3>
            </a>
          </Col>

        </Row>
        </div>
      </div>
    )
  }
});

export default Home;