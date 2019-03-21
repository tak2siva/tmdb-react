import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import "./movies.scss";

class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            loadError: false,
            popularMovies: []
        }
    }

    componentDidMount() {
        fetch("/movies/popular")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    isLoaded: true,
                    loadError: false,
                    popularMovies: res               
                })
            })
            .catch(err => {
                console.log("Error fetching popular movies..", err);
                this.setState({loadError: true})
            })
    }

    render() {
        const {isLoaded, popularMovies, loadError} = this.state;
        if (loadError) {
            return(
                <div>
                    <h3> Error Loading.. </h3>
                </div>
            )
        }

        if (!isLoaded) {
            return(
                <div>
                    <h3> Loading.. </h3>
                </div>
            )
        }
        
        return (
            <CardColumns className="Movies">
                {popularMovies.map(movie => {
                    return <Card>
                        <Card.Img variant="top" src="./download.jpeg" />
                        <Card.Body>
                            <Card.Title>{movie.name}</Card.Title>
                            <Card.Text>This is movie description</Card.Text>
                        </Card.Body>
                    </Card>
                })}
            </CardColumns>
        )
    }
}

export default Movies;