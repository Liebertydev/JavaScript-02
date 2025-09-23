// function recursiva(num) {
//     if (num > 10) return;
//     console.log(num);
//     num++;
//     recursiva(num);
// }

// recursiva(1);

function fatorial(n) {
    if (n === 1) return 1;

    return n * fatorial(n - 1);
}

console.log(fatorial(5));
