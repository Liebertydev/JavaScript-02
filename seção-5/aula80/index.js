//Herança 
// O que Caneca e Camiseta tem em comum?
//Ambos são produtos

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get() {
            return estoque;
        },
        set(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const p1 = new Produto('Copo', 30);
const c1 = new Camiseta('Regata', 100, 'Preta');
const caneca = new Caneca('Caneca', 15, 'Porcelana', 20)

console.log(c1);
console.log(p1);
console.log(caneca);