//Dobre os números
//
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map((num) => num * 2);

// console.log(numerosDobrados);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiza', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduarda', idade: 55},
    { nome: 'Lethycia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Any', idade: 47}
];

const nomes = pessoas.map(obj => {
    return obj.nome;
});

// console.log(nomes);

// const idades = pessoas.map(obj => {
//     return {idade: obj.idade};
// }); ou 👇

const idades = pessoas.map(obj => ( {idade: obj.idade} ));
//transformamos em uma expressão de funçao pra funcionar

console.log(idades);

const comIds = pessoas.map((obj, indice) => {
    obj.id = indice;
    return obj;
});

console.log(comIds);

//O GRANDE PROBLEMA É QUE QUANDO USAMOS O PARAMETRO OBJ, NÓS ALTERAMOS O OBJETO ORIGINAL, POIS APONTAM PRA MESMA REFERÊNCIA!

//COMO RESOLVER ?

const comIds2 = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});

console.log(comIds2);