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

module.exports = server;
