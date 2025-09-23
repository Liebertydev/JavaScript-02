// console.log('Linha 0);
// console.log('Linha 1);
// console.log('Linha 2);
// console.log('Linha 3);
// console.log('Linha 4);
// console.log('Linha 5);

// i = index
// for (let i = 0; i <= 5; i++) {
//     console.log(`Linha ${i}`)
// }

// for (let c = 10; c >= 0; c--) {
//     console.log(c)
// }

// jeito pequeno:

// for (let i = 0; i <= 10; i++) {
//     const impOuPar = i % 2 === 0 ? 'par' : 'impar';
//     console.log(i, impOuPar);
// }

// jeito grande:

// for (let i = 0; i <= 10; i++) {
//     let impOuPar
//     if (i % 2 === 0) {
//         impOuPar = 'Par'
//         console.log(i, impOuPar)
//     } else {
//         impOuPar = 'Impar'
//         console.log(i, impOuPar)
//     }
// }


//                 0       1      2
const frutas = ['Maçã', 'Pera', 'Uva']

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}
