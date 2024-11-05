const pgp = require('pg-promise')();
const connectionString = 'postgresql://user:password@localhost/database';

const db = pgp(connectionString);

module.exports = db;