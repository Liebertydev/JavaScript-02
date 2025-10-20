// function recursiva(num) {
//     if (num > 10) return;
//     console.log(num);
//     num++;
//     recursiva(num);
// }

// recursiva(1);

function fatorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    }

    return n * fatorial(n - 1);
}

let fat = fatorial;
console.log(fat(5));
console.log(fat(6));
console.log(fat(0));