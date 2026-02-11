const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');


app.use(express.static(path.resolve(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.use(middlewareGlobal); //middleware global
app.use(outroMiddleware); //middleware global
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor Executando na porta 3000');
});
