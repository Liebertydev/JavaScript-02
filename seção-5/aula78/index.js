//Prototype

function Pessoa(nome) {
    this.nome = nome;
    // this.falar = () => `Olá ${nome}`;
}

Pessoa.prototype.falar = function() {
    return `Olá ${this.nome}`}
;

const p1 = new Pessoa('Lee');
console.log(p1.falar());// achou no prototype, e nao na Pessoa