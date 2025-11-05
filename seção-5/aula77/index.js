//métodos para obj


//Copiar um obj(assign ou ...)

const pessoa = {
    nome: 'Lee',
    idade: 19
};

// const p2 = {...pessoa};
const p2  = Object.assign({}, pessoa);

console.log(p2);

// Mostrar descriptor do obj(getOwnPropertyDescriptor)

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'));

// Mostrar os valores do obj

console.log(Object.values(pessoa));

// Imprime um array de arrays com o par chave e valor

console.log(Object.entries(pessoa));

for (let chave of Object.entries(pessoa)) {
    console.log(chave[0], chave[1]);
}

// ou

for (let [chave, valor] of Object.entries(pessoa)) {
    console.log(chave, valor);
} // usei desestruturação


// lembre-se do object.keys()

console.log(Object.keys(pessoa));


