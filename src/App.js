import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Featured from './Featured'
import Movies from './Movies'
import { Route, NavLink, HashRouter, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
      return(
        <HashRouter>
        <Container>
          <Row className="justify-content-md-center" key="title">
            <Col xs lg="1"> <h2> TMDB </h2> </Col>
          </Row>
          <Row key="groups" className="h-25 bg-dark">
            <Col>
            
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item"><NavLink variant="link" className="text-white" to="/"> Featured </NavLink></li>
                  <li className="list-inline-item"><NavLink variant="link" className="text-white" to="/movies"> Movies </NavLink></li>
                  <li className="list-inline-item"><NavLink variant="link" className="text-white" to="/tvshows"> TV Shows </NavLink></li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row key="search-bar">
            <p style={{'backgroundColor' : 'lightblue'}} className="w-100 p-3"> Search Bar </p>
          </Row>
          <Row className="justify-content-md-center" key="featured">
              <Route exact path="/" component={Featured}/>
              <Route path="/movies" component={Movies}/>
          </Row>
      </Container>
      </HashRouter>
      )
  }
}

export default App;
