function meuEscopo() {
    let form = document.querySelector('.form')
    let res = document.querySelector('.res')
    let pessoas = []

    function receberEventoForm(evento) {
        evento.preventDefault()

        let nome = form.querySelector('.nome')
        let sobrenome = form.querySelector('.sobrenome')
        let peso = form.querySelector('.peso')
        let altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value
        })

        res.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }


    form.addEventListener('submit', receberEventoForm)
}
meuEscopo()
