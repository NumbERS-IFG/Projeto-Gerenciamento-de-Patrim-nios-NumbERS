const bodyParser = require('body-parser');
const atividade = require('./routes/atividade.routes');
const categoria = require('./routes/categoria.routes');
const condicao = require('./routes/condicao.routes');
const instituicao = require('./routes/instituicao.routes');
const projeto = require('./routes/projeto.routes');
const situacao = require('./routes/situacao.routes');
const skill = require('./routes/skill.routes');
const usuario = require('./routes/usuario.routes');
const login = require('./routes/login.routes');
const express = require('express');
const app = express();

//INDICAÇÃO PARA O EXPRESS LER BODY COMO JSON
app.use(express.json());

//CONFIRAÇÃO DE ROTAS PARA AS PÁGINAS DESCRITAS A PARTIR DOS ARQUIVOS .ROUTES
app.use('/atividade', atividade);
app.use('/categoria', categoria);
app.use('/condicao', condicao);
app.use('/instituicao', instituicao);
app.use('/projeto', projeto);
app.use('/situacao', situacao);
app.use('/skill', skill);
app.use('/usuario', usuario);
app.use('/login', login);

module.exports = app;
