const pgp = require('pg-promise')();
const connectionString = 'postgresql://numbers:n4mb3r5_IFG@localhost/projeto_gpatri';

const db = pgp(connectionString);

module.exports = db;