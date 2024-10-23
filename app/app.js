const bodyParser = require('body-parser');
const usuario = require('./routes/user.routes');
const express = require('express');
const app = express();

//INDICAR PARA O EXPRESS LER BODY COMO JSON
app.use(express.json());
//CONFIGURA PARA RECEBER VIA CHAVE=VALOR
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/usuario', usuario);

module.exports = app;