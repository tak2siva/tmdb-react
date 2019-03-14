import React, { Component } from 'react';
import { holder } from 'holderjs';
import { Card, CardGroup } from 'react-bootstrap';
import Image from "react-graceful-image";

class Featured extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            movies: []
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
        if (!isLoaded) {
            return <div className="App">
                <h3> Loading... </h3>
          </div>
        }
        return (
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
        );
    }
}

export default Featured;