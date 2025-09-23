function Pessoa(nome) {
    this.nome = nome;

    function validarNome(nomeTeste) {
        return nomeTeste.length > 2;
    }

    this.validar = function () {
        if (validarNome(this.nome)) {
            console.log('Nome válido: ', this.nome);
        } else {
            console.log('Nome inválido');
        }
    };
}

const p = new Pessoa('li');
console.log(p.validarNome); // undefined
p.validar();