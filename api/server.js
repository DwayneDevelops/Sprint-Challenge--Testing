const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const Games = require('../games/gamesModel.js');


const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// server.use('/api/games', gamesRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'Hey party people!' })
})

server.get('/games', (req, res) => {
    Games.getAll()
    .then(games => {
        res.status(200).json(games);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

server.post('/games', (req, res) => {
    const newGame = req.body;

    if (!newGame.title || !newGame.genre) {
        res.status(422).json({ message: 'Please provide name and genre' });
    } else {
        Games.insert(newGame)
        .then(game => {
        res.status(201).json(game);
    })
    .catch(error => {
        res.status(500).json({ err: 'Could not insert game'});
     });
    };
});

module.exports = server;
