var postgres = require('postgresql')
var connectionString = 'postgres://aluno:aluno123@localhost:5432/gerenciamento_acesso_patrimonio';
var pgClient = postgres.Client(connectionString);
pgClient.connect();

let sql = 'select * from usuarios';
pgClient.query(sql, (err, res) => {
    if (err) throw err;
    let usuarios = res.rows;
    for (let i = 0; i < usuarios.length; i++) {
        console.log(usuarios[i].id + ': ' + usuarios[i].nome);
    }
});
pgClient.end();