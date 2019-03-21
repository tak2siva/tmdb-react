import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Featured from './featured/Featured'
import Movies from './movies/Movies'
import TVShows from './tvshows/TVShows'
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
                <ul className="list-inline">
                  <li className="list-inline-item"><NavLink variant="link" className="text-white" to="/"> Featured </NavLink></li>
                  <li className="list-inline-item"><NavLink variant="link" className="text-white" to="/movies"> Movies </NavLink></li>
                  <li className="list-inline-item"><NavLink variant="link" className="text-white" to="/tvshows"> TV Shows </NavLink></li>
                </ul>
            </Col>
          </Row>
          <Row key="search-bar">
            <p style={{'backgroundColor' : 'lightblue'}} className="w-100 p-3"> Search Bar </p>
          </Row>
          <Row className="justify-content-md-center" key="featured">
              <Route exact path="/" component={Featured}/>
              <Route path="/movies" component={Movies}/>
              <Route path="/tvshows" component={TVShows}/>
          </Row>
      </Container>
      </HashRouter>
      )
  }
}

export default App;
