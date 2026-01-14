import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');

const qtdCaracteres = document.querySelector('.qntCarac');
const chkMaiusculas = document.querySelector('.chk-maiusc');
const chkMinusculas = document.querySelector('.chk-minusc');
const chkNumber = document.querySelector('.chk-num');
const chkSimbolo = document.querySelector('.chk-simbol');

const btnGerarSenha = document.querySelector('.gerar-senha');

export default () => {
    btnGerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
}

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumber.checked,
        chkSimbolo.checked
    );

    return senha || 'Nada Selecionado';
}
