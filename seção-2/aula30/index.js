// function exemplo() {
//     let sobrenome = 'Li'
//     if (true) {
//         let idade = 20
//         var nome = 'Otávio'
//         console.log(sobrenome) // Funciona
//     }
//     // console.log(idade) // não funciona → 20
//     console.log(nome)
// }

// exemplo()

var nome = 'Otávio'
if (true) {
    var nome = 'Wendel'
    if (true) {
        var nome = 'Lee'
        console.log(nome) // Lee
    }
    console.log(nome) // Wendel
}
console.log(nome) // Otávio
