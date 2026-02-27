const express = require('express');
const route = express.Router();
const homeControuller = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');


//Rotas da Home

route.get('/', homeControuller.index);

//Rotas de Login

route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);

module.exports = route;