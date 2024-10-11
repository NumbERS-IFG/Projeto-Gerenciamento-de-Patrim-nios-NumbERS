const pgp = require('pg-promise')();
const connectionString = 'postgresql://aluno:aluno123@localhost/gerenciamento-acesso-patrimonio';

const db = pgp(connectionString);

module.exports = db;