//            012345678910
const nome = 'Luiz otávio'
// console.log(nome.length) | retorna 10

//               0      1      2
let alunos = ['Luiz', 'Ana', 'Lee']
// console.log(alunos.length)  | retorna 3

// console.log(alunos)  retorna o vetor todo
// console.log(alunos[0]) | retorna Luiz
// console.log(alunos[2]) | retorna Lee
// alunos[0] = 'Eduardo' | mudei o vetor
// console.log(alunos) | eduardo, ana, lee
// alunos.push('Luiza') | adcionei Luiza no fim
// alunos.push('Maria') | adcionei Maria no fim
// console.log(alunos) | eduardo, ana, lee, luiza, maria
// alunos.unshift('Bia') | adicionei Bia ao início
// console.log(alunos) | bia, eduardo, ana, lee, luiza, maria
// alunos.pop() | maria foi removido do final do array
// console.log(alunos) | bia, eduardo, ana, lee, luiza
// let removido = alunos.pop() | guarda luiza em uma let
// alunos.shift() | removeu bia
// console.log(alunos) | eduardo, ana, lee, luiza
// delete alunos[3] | eduardo, ana, lee
// console.log(alunos) | eduardo, ana, lee, <1 empty item>(vazio)

// console.log(alunos.slice(0, 2)) | mostra [ 'Luiz', 'Ana' ], pois o 2 não é incluido

// console.log(alunos.slice(1, 3)) | mostra [ 'Ana', 'Lee' ]  