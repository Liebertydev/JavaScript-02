function* contador() {
    let c = 0;
    while (true) {
        yield c;
        c++
    }
}

const c = contador();

for (let valor of c) {
    console.log(valor);
}