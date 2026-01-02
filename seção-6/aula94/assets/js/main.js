document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

function carregaPagina(el) {
    const href = el.getAttribute('href');
    fetch(href)
        .then(response => {
            if(response.status !== 200) {
                throw new Error('404 Not Found');
            }
            return response.text();
        })
        .then(html => carregaResultado(html))
        .catch(e => console.log(e));
    
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
