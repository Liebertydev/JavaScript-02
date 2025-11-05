// defineProperty -> Getters e Setters


function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        // value: estoque,
        // writable: false,
        configurable: false,
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if(typeof valor !== 'number') {
                console.log('Valor inválido, por favor só envie números');
                return;
            }

            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 'oi'; // da erro
console.log(p1.estoque);

// usando factory functions


function criaPessoa(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            if (typeof valor !== 'string') {
                console.log('Valor inválido, envie um valor do tipo texto');
                return;
            }
            nome = valor;
        }
    }
}

const pess1 = criaPessoa('Lee');
pess1.nome = 'Lieberty';
console.log(pess1.nome); // Lieberty
