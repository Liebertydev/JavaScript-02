const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', e => {
    if (inputTarefa.value === '') {
        alert('Você nao pode deixar vazio!');
        return;
    }
    criarTarefas(inputTarefa.value);
});

document.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        if (inputTarefa.value === '') {
            alert('Você nao pode deixar vazio!');
            return;
        }
        criarTarefas(inputTarefa.value);
    }
})

function criarTarefas(valor) {
    const li = criaLi();
    li.innerText = valor + " ";
    tarefas.appendChild(li);
    inputTarefa.value = '';
    inputTarefa.focus();
    criaBtnApagar(li);
    criaBtnRiscar(li);
    salvarTarefas();
}

function criaLi() {
    return document.createElement('li');
}

function criaBtnApagar(li) {
    const btnApagar = document.createElement('button');
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'Clique para apagar');
    btnApagar.innerText = 'Apagar';
    btnApagar.style.marginRight = '10px';
    li.appendChild(btnApagar);
}

function criaBtnRiscar(li) {
    const btnRiscar = document.createElement('button');
    btnRiscar.setAttribute('class', 'riscar');
    btnRiscar.setAttribute('title', 'Clique aqui para riscar');
    btnRiscar.innerText = 'Riscar';
    li.appendChild(btnRiscar);
}

document.addEventListener('click', e => {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }

    if (el.classList.contains('riscar')) {
        el.parentElement.style.textDecoration = 'line-through';
    }
});

function salvarTarefas() {
    const tarefasLi = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (const tarefa of tarefasLi) {
        let texto = tarefa.innerText.replace('Apagar', '').replace('Riscar', '').trim();
        listaDeTarefas.push(texto);
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas-chave', tarefasJson);
}

function adicionarTarefasSalvas() {
    const tarefasSalvas = localStorage.getItem('tarefas-chave');
    if (!tarefasSalvas) return;

    const listaDeTarefas = JSON.parse(tarefasSalvas);
    for (const tarefa of listaDeTarefas) {
        criarTarefas(tarefa);
    }
}

adicionarTarefasSalvas();
