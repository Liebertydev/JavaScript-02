const mod1 = require('./mod1'); // mod 1 é um obj
console.log(mod1);
mod1.falaNome();

//Caso eu queira exportar somente uma coisa:

// const mod1 = require('./mod1').falaNome
// falaNome();

//ou

// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;

//Usando desestruturação:

const {nome, sobrenome, falaNome} = require('./mod1');
console.log(nome);