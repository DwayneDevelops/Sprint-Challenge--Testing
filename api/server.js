const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hey party people!')
})

module.exports = server;
