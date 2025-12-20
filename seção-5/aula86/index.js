//herança com classes

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado!`);
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado!`);
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

    descricao() {
        return `sou um ${this.nome} ${this.modelo} de cor ${this.cor}`
    }
}

const s1 = new Smartphone('Iphone', 'Red', '12');
console.log(s1.descricao());
s1.ligar();
console.log(s1);

