import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Featured from './Featured'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
      return(
        <Container>
          <Row className="justify-content-md-center" key="title">
            <Col xs lg="1"> <h2> TMDB </h2> </Col>
          </Row>
          <Row key="groups" className="h-25 bg-dark">
            <Col xs={1}> <Button variant="link" className="text-white"> Featured </Button> </Col>
            <Col xs={1}> <Button variant="link" className="text-white"> Movies </Button> </Col>
            <Col xs={2}> <Button variant="link" className="text-white"> TV Shows </Button> </Col>
          </Row>
          <Row key="search-bar">
            <p style={{'backgroundColor' : 'lightblue'}} className="w-100 p-3"> Search Bar </p>
          </Row>
          <Row className="justify-content-md-center" key="featured">
            <Featured/>
          </Row>
      </Container>
      )
  }
}

export default App;
