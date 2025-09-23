/* Criando um objeto

const pessoa1 = {
    nome: 'Lieberty',
    sobrenome: 'Holanda',
    idade: 19
}

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

*/

//Criando uma function pra criar objetos:

/* function criarPessoa (nome, sobrenome, idade) {
    return {
        nome: nome, 
        sobrenome: sobrenome, 
        idade: idade
    }
}

const pessoa1 = criarPessoa ('Lieberty', 'Holanda', 19)
const pessoa2 = criarPessoa ('Any', 'Hellen', 17)
const pessoa3 = criarPessoa ('Maria', 'Luiza', 23)
const pessoa4 = criarPessoa ('Tyler', 'Bryan', 12)

*/

const pessoa1 = {
    nome: 'Lee',
    sobrenome: 'Holanda',
    idade: 20,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`)
    },

    addIdade() {
        this.idade++
    }
}

pessoa1.fala()
pessoa1.addIdade()
pessoa1.fala()
pessoa1.addIdade()
pessoa1.fala()
