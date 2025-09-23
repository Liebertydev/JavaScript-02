function criaPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(); // usei espaço em vez de vírgula
        }
    };
}

// criando várias pessoas
const p1 = criaPessoa('Lieberty', 'Holanda');
const p2 = criaPessoa('Any', 'Hellen');
const p3 = criaPessoa('Maria', 'Silva');

// usando o setter para alterar
p1.nomeCompleto = 'João Souza';
p2.nomeCompleto = 'Carla Dias';

// cada um funciona independente
console.log(p1.nomeCompleto); // João Souza
console.log(p2.nomeCompleto); // Carla Dias
console.log(p3.nomeCompleto); // Maria Silva
