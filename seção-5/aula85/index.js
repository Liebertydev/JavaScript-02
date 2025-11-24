class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    apresentar() {
        console.log(`Meu chamo ${this.nome} ${this.sobrenome}`);
    }
}

const p1 = new Pessoa('Lieberty', 'Holanda');
p1.apresentar();