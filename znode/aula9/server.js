const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))

// http://americanas.com/produtos/1?categoria=tv&ordem=preco

//http = protocolo
//americanas.com = domínio
// /produtos/1 = rota + parametro
// ?categoria... = queryString 

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>`);
});

app.get('/testes', (req, res) => {
    console.log('Você está mosttrando os testes');
    res.send('Você está mostrando os testes')
});

app.get('/testes/:idUsuarios', (req, res) => {
    console.log(req.params);
    res.send(req.params.idUsuarios);
});

app.get('/testes/:idUsuarios/:parametro', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.categoria);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});


app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor Executando na porta 3000');
});

