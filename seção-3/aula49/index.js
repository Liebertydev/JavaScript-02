/*function funcao(a, b, c) { 
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}
funcao(1, 3, 4, 5, 6, 7, 8, 9, 10); 
*/

// function funcao(a, b, c, d, e, f) { 
//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);


// function funcao(a = 1, b = 1, c = 4) {
//     console.log(a + b + c);
// }
// funcao(2, undefined,10); // b recebe valor padrão(1)

function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}
let obj = {
    nome: 'Lieberty',
    sobrenome: 'Holanda',
    idade: 19
}
// funcao(obj)

function funcao ([v1, v2, v3]) {
    console.log(v1, v2, v3);
}
// funcao(['Lieberty', 'Holanda', 19]);

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}
conta('+', 1, 10, 20, 30, 40)