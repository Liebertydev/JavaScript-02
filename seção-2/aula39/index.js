const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let num of numeros) {


//     if (num % 2 === 0) {
//         continue; // deve ser colocada acima do codigo
//     }

//     console.log(num)

//     if ( num === 7) {
//         console.log('7 encontrado, saindo...')
//         break
//     }

    
//  }

let i = 0

while (i < numeros.length) {

    let num = numeros[i]

    if (num === 2) {
        console.log('pulei o numero 2');
        i++;
        continue;
    }

    console.log(num)

    i++
}


