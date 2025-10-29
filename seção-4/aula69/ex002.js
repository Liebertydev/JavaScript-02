//Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Luiza', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Any', idade: 55},
    {nome: 'Ewellyn', idade: 10},
    {nome: 'Eduarda', idade: 64},
    {nome: 'Manu', idade: 63}
];

const maisVelha = pessoas.reduce((acc, valor) => {
   if (acc.idade > valor.idade) return acc;
   return valor;
}); // o acumulador virou o primeiro elemento
console.log(maisVelha);

