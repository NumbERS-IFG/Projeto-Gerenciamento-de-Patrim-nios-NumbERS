//PELO AMOR DE DEUS EU TENHO QUE ARRUMAR ISSO!!!

const express = require('express');
const UsuarioController = require('./app/controllers/UsuarioController.js');

const app = express();
//INDICAR PARA O EXPRESS LER BODY COMO JSON
app.use(express.json());

app.get('/usuarios', (req, res) => {
    res.send(UsuarioController.index);
})

app.post('/usuarios', (req, res) => {
    res.send(UsuarioController.store);
})

module.exports = app;