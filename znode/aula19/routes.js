const express = require('express');
const route = express.Router();
const homeControuller = require('./src/controllers/homeController');
const contatoControuler = require('./src/controllers/contatoController');

//Rotas da Home

route.get('/', homeControuller.index);
route.post('/', homeControuller.trataPost);

//Rotas de Contato

route.get('/contato', contatoControuler.index);

module.exports = route;