import React, { Component } from 'react';
import './App.css';
import { Container, Card, Button, CardDeck, CardGroup, Row } from 'react-bootstrap';
import { holder } from 'holderjs';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true,
      movies: ["Captian Marvel", "Avengers Endgame", "Spider Man Far From Home"]
    }
  }

  componentDidMount() {
    fetch("/featured/movies")
      .then(res => res.json())
      .then(res => {
        this.setState({
          isLoaded: true,
          movies: res
        }, err => {
          if (err) {
            console.log("Error fetching featured movies ", err)
          }
        })
      });
  }
  
  render() {
    const {isLoaded, movies} = this.state;

    if (true) {
      return(
        <Container>
          <Row className="justify-content-md-center">
            <h3> tMDB </h3>
          </Row>
          <Row className="justify-content-md-center">
        <CardGroup>
        {movies.map(movie => {
          return <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>;
        })}
      </CardGroup>
      </Row>
      </Container>
      )
    }
    return (
      <div className="App">
        <h3> Loading... </h3>
      </div>
    );
  }
}

export default App;
