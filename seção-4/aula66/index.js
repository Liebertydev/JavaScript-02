const numeros = [5, 20, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// let novoNumeros;
// for (let c = 0; c < numeros.length; c++) {
//     if (numeros[c] > 10) {
//        novoNumeros =  console.log(numeros[c]);
//     }
// }


const numerosFilttrados = numeros.filter(callbackFilter);
//Também podemos usar Arrow function: 
//numerosFiltrados = numeros.filter(valor => valor > 10);
// o "=>" já faz o retorno automático quando não tem {}

function callbackFilter(valor, indice, array) {
    if (valor > 10) {
        return true;
    } else {
        return false;
    }
}

console.log(numerosFilttrados);

const numFiltrados2 = numeros.filter((valor, indice, array) => {
    console.log(valor); //Reproduzimos a funcionalidade do for
    return valor > 10;
})

console.log(numFiltrados2);