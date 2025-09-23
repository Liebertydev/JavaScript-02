function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function () {
        console.log(`Meu nome é: ${this.nome} ${this.sobrenome}`);
    };
}

const p1 = new Pessoa('Lieberty', 'Holanda');
const p2 = new Pessoa('Any', 'Hellen');

p1.metodo();
p2.metodo();