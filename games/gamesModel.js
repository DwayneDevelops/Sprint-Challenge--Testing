const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    getAll,
    getByTitle,
    remove
}

function insert(game) {
    return db('games')
    .insert(game);
}

function getAll() {
    return db('games');
}

function getByTitle(title) {
    return db('games')
    .where({ title })
    .first();
}

function remove(title) {
    return null
}