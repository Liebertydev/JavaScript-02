function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        // 1️⃣ inicia vem primeiro
        inicia() {
            this.cliqueBotoes(); // this é calculadora
        },

        // 2️⃣ cliqueBotoes vem depois
        cliqueBotoes() {
            // this é calculadora
            document.addEventListener('click', function (e) {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText); // this é document, mas bind corrige
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            }.bind(this)); // bind garante que this seja calculadora
        }, 

        // 3️⃣ btnParaDisplay
        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        // 4️⃣ clearDisplay
        clearDisplay() {
            this.display.value = '';
        },

        // 5️⃣ apagaUm
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        // 6️⃣ realizaConta
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta inválidaa');
                return;
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
