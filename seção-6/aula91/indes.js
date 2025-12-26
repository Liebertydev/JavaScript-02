// async await

function rand(min = 1, max = 2) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject("O valor passado deve ser apenas números.");
                return;
            }

            resolve(msg.toUpperCase() + '- Passei na promise');
        }, tempo);
    });
}

// esperaAi('fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('fase 2', rand());
//     })
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('fase 3', rand());
//     })
//     .then(valor => {
//         console.log(valor);
//         return valor;
//     })
//     .then(valor => {
//         console.log("Terminamos na fase: " + valor);
//     })
//     .catch(e => {
//         console.log(e);
//     });

async function executa() {

    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
        const fase2 = await esperaAi(3, rand());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);

        console.log("Terminamos na fase: ", fase3);
    } catch(e) {
        console.log(e);
    }
}

executa();