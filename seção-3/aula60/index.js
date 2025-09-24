function* geradora1() {
    yield ' Valor 01';
    yield ' Valor 02';
    yield ' Valor 03';
}

const g1 = geradora1();

// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().done);

for (let valor of g1) {
    console.log(valor);
}


