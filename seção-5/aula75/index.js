//defineProperty e defineProperties

function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // que seria o valor 3
        writable: false, // pode alterar o valor ou não
        configurable: false // pode redefinir o defineProperty denovo e apagar a chave?
    });
}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1);
p1.estoque = 200; //não vai sofrer alterações, pois o writable está false
delete p1.estoque;// não vai deletar, pois o configurable está false
console.log(p1);


// defineProperties

function Pessoa(nome, sobrenome) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        sobrenome: {
            enumerable: true,
            value: sobrenome,
            writable: true,
            configurable: true
        }
    });
}

const p2 = new Pessoa('Lieberty', 'Holanda');
console.log(p2);