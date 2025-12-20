class ValidaForms {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('Formulário enviado');
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            this.criaErro(senha, 'Campos "senha" e "repetir senha" precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos "senha" e "repetir senha" precisam ser iguais.');
            valid = false;
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'A senha deve estar entre 6 e 12 caracteres.');
            valid = false;
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true;

        for(let erros of this.formulario.querySelectorAll('.error-text')) {
            erros.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if(!campo.value) {
                this.criaErro(campo, `O campo "${label}" não pode estar vazio.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.valideCpf(campo)) {
                    valid = false;
                }
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) {
                    valid = false;
                }
            }

        }

        return valid;
    }

    criaErro(campo, msg) {
        let div = document.createElement('div');
        div.classList.add('error-text');
        div.innerText = msg;
        campo.insertAdjacentElement('afterend', div);
    }

    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, `Usuário deve ter entre 3 e 12 caracteres.`);
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/)) {
            this.criaErro(campo, `Nome de usuário precisa conter apenas letras e/ou números`);
            valid = false;
        }

        return valid;
    }

    valideCpf(campo) {
        const cpf = new ValidandoCpf(campo.value);

        if(!cpf.validaCpf()) {
            this.criaErro(campo, `CPF inválido`);
            return false;
        }

        return true;
    }
}

const form = new ValidaForms();