// let i = 0;

// while (i <= 10) {
//     console.log(i)
//     i++
// }

// let nome = 'Lieberty'

// let i = 0

// while (i < nome.length) {
//     console.log(nome[i])
//     i++
// }

function random(min, max) {
    const r = Math.random() * (max - min + 1) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;


while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

// do {
//     rand = random(min, max)
//     console.log(rand)
// } while(rand !== 10);