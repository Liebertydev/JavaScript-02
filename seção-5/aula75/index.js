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
p1.estoque = 200; //não vai sofrer alterações, pois o writeble está false
delete p1.estoque;// não vai deletar, pois o configurable está false
console.log(p1);