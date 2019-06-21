const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    getAll,
    getById,
    remove
}

function insert(game) {
    return db('games')
    .insert(game, 'id')
    .then(ids => {
        return db('games')
        .where({ id: ids[0] })
        .first();
    });
}

function getAll() {
    return db('games');
}

function getById(id) {
    return db('games')
    .where({ id })
    .first();
}

function remove(id) {
    return null
}