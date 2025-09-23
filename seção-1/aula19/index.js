// Valores primitivos(imutáveis) - 

let a = 'a'
let b = a // Cópia
console.log(a, b)

b = 'c'
console.log(a, b) //Somente o valor de b foi trocado

// Valores por referência(mutáveis) - Array, object e function

let A = [1, 2, 3]
let B = A
console.log(A, B)

B.push(4) // O valor de A também mudou
console.log(A, B) 

// E se eu quiser só copiar o valor?

const a1 = {
    nome: 'Lieberty',
    sobrenome: 'Holanda'
}

const b1 = {...a1} // só fiz copiar

a1.nome = "Lee"
console.log(a1)
console.log(b1)
