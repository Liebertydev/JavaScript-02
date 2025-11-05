const pessoa = {
    nome: 'Lieberty',
    idade: 19,
    getDataNasc() {
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    }
};

console.log(pessoa.getDataNasc());

// Factory functions / Constructor functions / classes

function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        /*get*/ nomeCompleto() {
            return  `${this.nome} ${this.sobrenome}`;
        }
    }
} 

const p1 = criaPessoa('Lieberty', 'Holanda');
console.log(p1.nomeCompleto()); //com get usava sem os ()

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function () {
        return `${this.nome} ${this.sobrenome}`;
    };
}

const p2 = new Pessoa('Lieberty', 'Holanda');
console.log(p2.nomeCompleto());