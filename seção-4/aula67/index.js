// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiza', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduarda', idade: 55},
    { nome: 'Lethycia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Any', idade: 47}
];

const bigNames = pessoas.filter(obj => obj.nome.length >= 5
);
console.log(bigNames); // Any foi excluida da lista

console.log('');

const maisDe50 = pessoas.filter(obj => obj.idade > 50);
console.log(maisDe50); // só mostra luiza e eduarda

const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
//  ou obj.nome.toLowerCase()[obj.nome.length - 1] === 'a';
});

console.log(nomeTerminaComA);