const { Pessoa } = require('./mod1');

const path = require('path');
const axios = require('axios');

const p1 = new Pessoa('Lieberty');

axios('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));
