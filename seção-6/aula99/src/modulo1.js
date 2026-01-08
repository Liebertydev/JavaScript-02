const nome = 'Lieberty';
const sobrenome = 'Holanda';
const idade = 19;

function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    FalarOi() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
    }
}

export { nome, sobrenome, idade, soma, Pessoa };


// export { nome, sobrenome, idade, soma, Pessoa };

// export const nome = 'Ewellin';
// export const sobrenome = 'Miranda';
// export function soma(x, y) {
//     return x + y;
// }

// export default class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     FalarOi() {
//         console.log(`Meu nome é ${nome} + ${sobrenome}`);
//     };
// }