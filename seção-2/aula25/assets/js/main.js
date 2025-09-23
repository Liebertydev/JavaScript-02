let form = document.getElementById('form')

form.addEventListener('submit', function (evento) {
    evento.preventDefault()

    let inputPeso = document.getElementById('peso')
    let inputAltura = document.getElementById('altura')

    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)

    if (!peso || peso <= 0) {
    verResultado('Peso inválido', false)
    return
}

    if (!altura || altura <= 0) {
    verResultado('Altura inválida', false)
    return
}


    let imc = getImc(peso, altura)
    let nivelImc = getNivelImc(imc)

    let msg = `Seu IMC é ${imc} (${nivelImc})`

    verResultado(msg, true)


})

function getNivelImc (imc) {
    let nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) {
        return nivel[5]
    } else if (imc >= 34.9) {
        return nivel[4]
    } else if (imc >= 29.9) {
        return nivel[3]
    } else if (imc >= 24.9) {
        return nivel[2]
    } else if (imc >= 18.5) {
        return nivel[1]
    } else if (imc < 18.5) {
        return nivel[0]
    }
}

function getImc(peso, altura) {
    let imc = peso / altura ** 2
    return imc.toFixed(2)
}

function criarP () {
    let p = document.createElement('p')
    return p
}

function verResultado(msg, isvalid) {
    let res = document.getElementById('resultado')
    res.innerHTML = ''

    
    let p = criarP()
    if (isvalid) {
        p.classList.add('paragrafo-true')
    } else {
        p.classList.add('paragrafo-false')
    }
    p.innerHTML = msg
    res.appendChild(p)
}