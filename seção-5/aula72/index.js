const pessoa = {
    nome: 'Lieberty', 
    sobrenome: 'Holanda'
};
console.log(pessoa.nome); // ou pessoa['nome'];
console.log(pessoa['sobrenome']);
const chave = 'nome';
console.log(pessoa[chave]); // da pra fazer assim também, ela vira dinâmica, pois eu posso alterar o valor dessa chave

const pessoa2 = new Object(); // o mesmo objeto, mas usando o construtor
pessoa2.nome = 'Lieberty';
pessoa2.sobrenome = 'Holanda';

delete pessoa2.nome;
console.log(pessoa2)