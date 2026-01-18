class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Lieberty';
const sobrenome = 'Holanda';

// module.exports = {
//     nome, sobrenome
// }

module.exports.Pessoa = Pessoa;


console.log(module.exports)