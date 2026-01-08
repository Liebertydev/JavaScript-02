import GeraCPF from './modules/GeraCPF';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/style.css';

(function () {
    const btnGerar = document.querySelector('.gerar');
    btnGerar.addEventListener('click', () => {
        const gera = new GeraCPF();
        const cpfGerado = document.querySelector('.cpf-gerado');
        cpfGerado.innerHTML = gera.geraNovoCpf();
    });

})();