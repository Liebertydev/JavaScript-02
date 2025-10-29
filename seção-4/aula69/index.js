//some todos os numeros(reduce)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = numeros.reduce((acc, valor, indice, array) => {
    acc += valor;
    console.log(acc);
    return acc;
}, 0);

//retorne um array com os pares(filter)

const numeros2 = [...numeros];
const pares = numeros2.reduce((acc, valor) => {
    if (valor % 2 === 0) {
        acc.push(valor);
    }
    return acc;
}, []); // melhor usar filter
console.log(pares);

//retorne um array com o dobro dos valores(map)

const numeros3 = [...numeros];
const dobro = numeros3.reduce((acc, valor) => {
    acc.push(valor * 2);
    return acc;
}, []); //melhor usar map
console.log(dobro);

 


