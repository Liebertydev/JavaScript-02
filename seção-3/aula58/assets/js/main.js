function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaEnter();
        this.cliqueBotoes();
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                this.realizaConta();
            }
        });
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.apagarUm();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }


        });
    };

    this.btnParaDisplay = valor => {
        this.display.value += valor;
        this.display.focus(); // essencial para nao bugar o navegador
    }
    this.clearDisplay = () => this.display.value = '';
    //coloquei direto porque só tem uma linha

    this.apagarUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };
    //coloquei inteiro pq mesmo tendo uma linha, ele ficou grande

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            if (!conta) {
                alert('Valor inválido');
                return;
            }
            conta = eval(conta);
            this.display.value = conta;
        } catch (e) {
            console.log(e);
            alert('Valor inválido');
            return;
        }
    };


}

const calc = new Calculadora();
calc.inicia();