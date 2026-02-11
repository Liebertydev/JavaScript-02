const express = require('express');
const route = express.Router();
const homeControuller = require('./src/controllers/homeController');
const contatoControuler = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next) {
    req.session = { nome: 'Lieberty', sobrenome: 'Holanda' };
    console.log();
    console.log('Passei no seu Middleware.');
    console.log();
    next();
}

function terminouMidd(req, res, next){
    console.log('Terminei sua requisição');
    console.log(`Seu nome é ${req.session.nome}`)
}

//Rotas da Home

route.get('/', meuMiddleware, homeControuller.index, terminouMidd);
route.post('/', homeControuller.trataPost);

//Rotas de Contato

route.get('/contato', contatoControuler.index);

module.exports = route;