function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia() === true) {
        return false;
    }

    const cpfParcial1 = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial1);
    const digito2 = this.criaDigito(cpfParcial1 + digito1);

    // console.log(digito1);
    // console.log(digito2);

    const novoCpf = cpfParcial1 + digito1 + digito2;
    // console.log(novoCpf);

    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;

    const total = cpfArray.reduce((acc, val) => {
        acc += (regressivo * Number(val));
        regressivo--;
        return acc;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia =  this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('705.484.450-52');

if(cpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}