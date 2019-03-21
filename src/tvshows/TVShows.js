import React, { Component } from 'react';
import { Card, CardColumns } from 'react-bootstrap'

class TVShows extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            loadError: false,
            popularTVShows: []
        }
    }

    componentDidMount() {
        fetch("/tvshows/popular")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    isLoaded: true,
                    loadError: false,
                    popularTVShows: res               
                })
            })
            .catch(err => {
                console.log("Error fetching popular tv shows..", err);
                this.setState({loadError: true})
            })
    }

    render() {
        const {isLoaded, popularTVShows, loadError} = this.state;
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
                {popularTVShows.map(show => {
                    return <Card>
                        <Card.Img variant="top" src="./download.jpeg" />
                        <Card.Body>
                            <Card.Title>{show.name}</Card.Title>
                            <Card.Text>This is movie description</Card.Text>
                        </Card.Body>
                    </Card>
                })}
            </CardColumns>
        )
    }
}

export default TVShows;