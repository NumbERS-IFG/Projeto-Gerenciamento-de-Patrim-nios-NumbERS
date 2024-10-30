const pgp = require('pg-promise')();
const connectionString = 'postgresql://user:password@localhost/databaseName';

const db = pgp(connectionString);

module.exports = db;