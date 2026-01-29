const express = require('express');
const app = express();

//         CRIAR   LER   ATUALIZAR  APAGAR
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         POST    GET   PUT        DELETE 

// http://meusite.com/ <- GET -> Entregue a página raiz(home)
// http://meusite.com/sobre <- GET -> Entregue a página sobre
// http://meusite.com/contato <- GET -> Entregue a página contato

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>`);
});

app.post('/', (req, res) => {
    res.send(`Formulário recebido!`);
});


app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor Executando na porta 3000');
});