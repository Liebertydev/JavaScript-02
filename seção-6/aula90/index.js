function rand(min = 1, max = 2) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(num, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof num !== 'number') {
            reject("O valor passado deve ser apenas números.");
            return;
        }

        setTimeout(() => {
            resolve(num);
        }, tempo);
    });
}

esperaAi(1, rand())
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2, rand());
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(3, rand());
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(erro => {
        console.log(erro);
    });


// let promise = Promise.resolve();

// for (let i = 1; i <= 10; i++) {
//     promise = promise.then(() => {
//         return esperaAi(i, rand());
//     }).then(resposta => {
//         console.log(resposta);
//     });
// }


// esperaAi('Frase 1', rand())
//   .then(resposta => {
//       console.log(resposta);
//       return esperaAi('Frase 2', rand());
//   })
//   .then(resposta => {
//       console.log(resposta);
//       return resposta + ' - continuou'; automaticamente o js chama o resolve(resposta + ' - continuou')
//   })
//   .then(resposta => {
//       console.log(resposta);
//   });
