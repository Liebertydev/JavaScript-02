//Importações

require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

//Conexão com o Banco
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('Pronto');
    })
    .catch(e => console.log(e));

//Iniciando server
app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor Executando na porta 3000');
    });
});


//Middlewares Globais
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(middlewareGlobal);

//configs do express
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Rotas
app.use(routes);