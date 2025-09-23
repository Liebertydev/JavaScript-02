let data = new Date()
let dataBrasil = formataDatas(data)

function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataDatas(data) {
    let dia = zeroAesquerda(data.getDate())  
    let mes = zeroAesquerda(data.getMonth() + 1)  
    let ano = zeroAesquerda(data.getFullYear())  
    let hora = zeroAesquerda(data.getHours()) 
    let min = zeroAesquerda(data.getMinutes())  
    let sec = zeroAesquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}

console.log(dataBrasil)