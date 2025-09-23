//return -> retorna um valor e termina a função
function soma(a, b) {
    return a + b;
}
// soma(5, 2) // nao mostra nada na tela, mas retorna um valor (7)


function soma2(a, b) {
    console.log(a + b)
}
// soma2(5, 2) // Mostra na tela a soma, mas retorna undefined

function criaPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    };
}
const p1 = criaPessoa('Lieberty', 'Holanda');
// console.log(p1);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Ola');
// console.log(olaMundo('mundo'));

function criaMultiplicador(Multiplicador) {
    return function (n) {
        return n * Multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(3));
console.log(quadriplica(3));