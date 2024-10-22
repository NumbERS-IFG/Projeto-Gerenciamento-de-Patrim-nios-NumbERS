const db = require('./app/database/conexaoBD.js');
const bodyParser = require('body-parser');
const express = require('express');
const Usuario = require("./app/models/Usuario");

const app = express();

//INDICAR PARA O EXPRESS LER BODY COMO JSON
app.use(express.json());
//CONFIGURA PARA RECEBER VIA CHAVE=VALOR
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/usuarios', async (req, res) => {
    let sql = "SELECT * FROM usuarios";

    try {
        let usuarios = await db.manyOrNone(sql);
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({mensagem: "Erro ao consultar usuários.", detalhes: error});
    }
})

app.post('/usuarios', (req, res) => {
    usuario = new Usuario(req.body.nome, req.body.sobrenome, req.body.matricula, req.body.senha, req.body.cargo);
    usuario.email = req.body.email ? req.body.email : null;
    usuario.cpf = req.body.cpf ? req.body.cpf : null;
    let sql = "INSERT INTO usuarios (nome, sobrenome, matricula, senha, email, cargo, cpf) VALUES ($1, $2, $3, $4, $5, $6, $7)"
    db.oneOrNone(sql, [
        usuario.nome,
        usuario.sobrenome,
        usuario.matricula,
        usuario.senha,
        usuario.email,
        usuario.cargo,
        usuario.cpf
    ])
        .then(() => {
            res.status(201).json({mensagem: "Usuário inserido com sucesso!"});
        })
        .catch((err) => {
            res.status(500).json({error: "Erro ao criar o usuário.", detalhes: err});
        });
});

app.put('/usuarios/:id', (req, res) => {
    usuario = new Usuario(req.body.nome, req.body.sobrenome, req.body.matricula, req.body.senha, req.body.cargo);
    usuario.email = req.body.email ? req.body.email : null;
    usuario.cpf = req.body.cpf ? req.body.cpf : null;
    let sql = "UPDATE usuarios SET nome = $1, sobrenome = $2, matricula = $3, senha = $4, email = $5, cargo = $6, cpf = $7 WHERE id_usuario = $8";
    db.oneOrNone(sql, [
        usuario.nome,
        usuario.sobrenome,
        usuario.matricula,
        usuario.senha,
        usuario.email,
        usuario.cargo,
        usuario.cpf,
        req.params.id
    ])
        .then(() => {
            res.status(200).json({mensagem: "Usuário alterado com sucesso"});
        })
        .catch((err) => {
            res.status(404).json({mensagem: "Erro ao atualizar usuário.", detalhes: err})
        });
});

app.delete('/usuarios/:id', (req, res) => {
    let sql = "DELETE FROM usuarios WHERE id_usuario = $1";
    db.oneOrNone(sql, req.params.id)
        .then(() => {
            res.status(200).json({mensagem: "Exclusão concluída com sucesso!"});
        })
        .catch((err) => {
            res.status(500).json({mensagem: "Erro ao excluir usuário", detalhes: err});
        });
})

module.exports = app;