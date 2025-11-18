const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
};

const pessoaPrototype = Object.assign({}, falar, comer, beber); //composição = compor um objeto com outros objetos


// const pessoaPrototype = {
//      falar() {
//         console.log(`${this.nome} está falando.`)
//     },

//     comer() {
//         console.log(`${this.nome} está comendo.`)
//     },

//     beber() {
//         console.log(`${this.nome} está bebendo.`)
//     }
// };

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Lieberty', 'Holanda');
p1.falar();