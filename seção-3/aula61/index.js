// function* contador() {
//     let c = 0;
//     while (true) {
//         yield c;
//         c++
//     }
// }

// const c = contador();

// for (let valor of c) {
//     console.log(valor);
// } gerador infinito

function* geradora() {
    yield 1;
    yield 2;
    yield 3;
}

const g1 = geradora();
// for (let valor of g1) {
//     console.log(valor);
// }

function* geradora2() {
    yield function() {
        console.log('Eu sou do y1');
    };

    yield function() {
        console.log('Eu sou do y2')
    }
}

const g2 = geradora2()
let func1 = g2.next().value;
let func2 = g2.next().value;
// func1();
// func2();

function* conta1a3() {
    yield 1;
    yield 2;
    yield 3;
}


function* conta4a6() {
    yield* conta1a3();
    yield 4;
    yield 5;
    yield 6;
}

const contar = conta4a6();
for(let valor of contar) {
    console.log(valor);
}