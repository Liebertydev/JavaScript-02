/*function saudacao(nome) {
   return `Bom dia, ${nome}!`
}

const saudar = saudacao('Lee')
console.log(saudar)*/

/* Jeito mais simples e menos flexível:

function soma(x, y) {
    return x + y
}

let somar = soma(2, 4)
console.log(somar)

*/

/* Jeito menos simples e mais flexível:

function soma (x, y) {
    const resultado = x + y
    return resultado
}

const resultado = soma(2, 4)
console.log(resultado)

*/

// Função Anônima:

let raiz = function(n) {
    return n ** 0.5
}

console.log(raiz(9))

// Arrow Function:

let raiz2 = (n) => {
    n ** 0.5;
}
console.log(raiz(25))

let raiz3 = n => n ** 0.5;
console.log(raiz(36))