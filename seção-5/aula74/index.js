function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Lieberty', 'Holanda');
Object.freeze(p1);

p1.nome = 'Lee';// não afetou, mas se eu criar um obj novo muda
console.log(p1.nome);

function Pessoa2(nome, idade) {
    this.nome = nome;
    this.idade = 19;

    Object.freeze(this);
}

const p2 = new Pessoa('Lee', 19);
//Agora nenhum objeto consegue ser modificado, pois modificamos seu molde


//Como congelar uma factory function?

function criaPessoa(nome, sobrenome) {
    const pessoa = {
        nome: nome,
        sobrenome: sobrenome
    };

    Object.freeze(pessoa);
    return pessoa;
}
