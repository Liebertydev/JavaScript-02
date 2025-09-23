function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },


        fala(assunto) {
            return ` ${this.nome} está ${assunto}` //this é p1
        },

        altura: a,

        peso: p,

        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Lieberty', 'Holanda', 1.8, 85);// this é p1, pois quem chama a function fala é "p1.fala"
// console.log(p1.fala('falando sobre Java'));
console.log(p1.imc());
console.log(p1.nomeCompleto);
