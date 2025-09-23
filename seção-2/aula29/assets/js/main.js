

/* 
let data = new Date()
let res = document.querySelector('.res')
res.innerHTML = getCriaData()




function getMesTexto(mes) {
    let mesTexto = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return mesTexto[mes]
   
}

function getDiaSemTexto(diaSemana) {
    let diaSemTexto = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

    return diaSemTexto[diaSemana]
}

function getCriaData() {
    let diaSem = data.getDay()
    let mes = data.getMonth()

    let diaSemTexto = getDiaSemTexto(diaSem)
    let mesTexto = getMesTexto(mes)

    return (
        `${diaSemTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
)
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

*/

// Outro modo mais simples de fazer:

let res = document.querySelector('.res')
let data = new Date()
res.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })


