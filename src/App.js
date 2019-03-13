import React, { Component } from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import Featured from './Featured'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
      return(
        <Container>
          <Row className="justify-content-md-center">
            <h3> tMDB </h3>
          </Row>
          <Row className="justify-content-md-center">
          <Featured/>
      </Row>
      </Container>
      )
  }
}

export default App;
