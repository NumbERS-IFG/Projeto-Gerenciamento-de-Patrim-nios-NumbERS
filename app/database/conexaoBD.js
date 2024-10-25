const pgp = require('pg-promise')();
const connectionString = 'postgresql://guilherme:guigameplay25@localhost/projeto_gpatri';

const db = pgp(connectionString);

module.exports = db;