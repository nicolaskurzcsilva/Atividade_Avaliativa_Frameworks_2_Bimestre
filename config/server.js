const express = require ('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();
app.set('view-engine','ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

consign()
.include('app/routes')//incluindo as rotas do projeto
.then('config/dbConnection.js')//incluindo a conexão com o banco no consign
.then('app/models')//inclui o diretório de models
.then('app/controllers')//inclui o diretório de controllers
.into(app);

module.exports = app;