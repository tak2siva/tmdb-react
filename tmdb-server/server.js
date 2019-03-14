import express from 'express';

const app = express();

app.get('/featured/movies', (req, res) => {
    const moviesList = [
        {name: 'Captain Marvel'},
        {name: 'Avengers Endgame'},
        {name: 'Doctor Strange 2'}
    ];
    return res
    .status(200)
    .send(moviesList);
})

app.listen(8080, "0.0.0.0")
console.log('tMDB Server running on port', 8080);