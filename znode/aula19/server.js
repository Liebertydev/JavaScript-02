// IMPORTAÇÕES
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const {
    middlewareGlobal,
    checkCsrfError,
    csrfMiddleware
} = require('./src/middlewares/middleware');
const helmet = require('helmet');
const csrf = require('csurf');

// sessões
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const flash = require('connect-flash');

// CONEXÃO COM MONGODB
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => app.emit('Pronto'))
    .catch(e => console.log(e));


// CONFIGURAÇÃO DE SESSION
const sessionOptions = session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTIONSTRING
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
        httpOnly: true
    }
});

// ORDEM CORRETA DOS MIDDLEWARES
if (process.env.NODE_ENV !== 'development') {
    app.use(helmet());
}
app.use(sessionOptions);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(csrf()); //(DEPOIS da session + body parser)
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(flash());
app.use(middlewareGlobal);
app.use(csrfMiddleware);

// CONFIGS DO EXPRESS
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// ROTAS
app.use(routes);


// MIDDLEWARE DE ERRO
app.use(checkCsrfError);

// INICIAR SERVIDOR
app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor Executando na porta 3000');
    });
});
