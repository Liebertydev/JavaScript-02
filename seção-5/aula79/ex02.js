function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco -= this.preco * (percentual/100);
}

Produto.prototype.aumento = function(percentual) {
    this.preco += this.preco * (percentual/100);
}

const p1 = new Produto('Camisa', 100);
 p1.desconto(10); //100 - 10% de 100 = 10
console.log(p1.preco); // 90 reais

function Servico(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// também poderia ser um obj:
 const s2 = {
    nome: 'Rebocar',
    preco: 100
}

Object.setPrototypeOf(s2, Produto.prototype);
s2.desconto(20);
console.log(s2);

const s1 = new Servico('Rebocar', 200);
Object.setPrototypeOf(Servico.prototype, Produto.prototype);
s1.desconto(10);
console.log(s1.preco);