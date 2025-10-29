// retone a soma do dobro dos valores pares
// filtrar pares
// dobrar os valores
// somar tudo

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27, 15];
const pares = numeros.filter(val => val % 2 === 0).map(val => val * 2).reduce((acc, val) => {
    acc+= val;
    return acc;
}, 0);

console.log(pares); 
