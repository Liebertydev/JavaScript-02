class ValidandoCpf {
    constructor(cpfInicial) {
        Object.defineProperty(this, 'cpfLimpo', {
                writable: false,
                enumerable: true,
                configurable: false,
                value: cpfInicial.replace(/\D+/g, '')
        });
    }

    validaCpf() {
        if(!this.cpfLimpo) return false;
        if (this.cpfLimpo.length !== 11) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidandoCpf.criaDigito(cpfParcial);
        const digito2 = ValidandoCpf.criaDigito(cpfParcial + digito1);

        const novoCpf = cpfParcial + digito1 + digito2;

        return this.cpfLimpo === novoCpf; 
    }

    static criaDigito(cpf) {
        const cpfArray = Array.from(cpf);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((acc, valor) => {
            acc += Number(valor) * regressivo;
            regressivo--;
            return acc;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequencia() {
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
}

const cpf = new ValidandoCpf('133.415.244-60');

if(cpf.validaCpf()) {
    console.log("CPF Valido");
} else {
    console.log("CPF inválido");
}