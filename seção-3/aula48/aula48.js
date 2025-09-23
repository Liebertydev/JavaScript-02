//Declaração de função
function falaOi() {
    console.log('oi');
}

// First-class objects (objetos de primeira classe):

// const souUmDado = function () {
//     console.log('sou um dado');
// }; 
// souUmDado()

// executaFuncao(souUmDado)

// function executaFuncao (funcao) {
//     funcao();
// }

// Arrow functions

const ArrowFuncao = () => {
    console.log('sou uma function')
}

ArrowFuncao();


const obj = {
    falar() {
        console.log('ola')
    }
}
obj.falar()

