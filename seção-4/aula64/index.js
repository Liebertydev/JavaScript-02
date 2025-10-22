//               -5       -4       -3          -2       -1
//                0        1        2           3        4
const nomes = ['Maria', 'João', 'Eduarda', 'Gabriela', 'Any'];


// nomes.splice(índice, qntDel, elem1, elem2...);

const removidos = nomes.splice(1, 1); //  remove e retorna
console.log(nomes, removidos);

const nomes2 = ['Maria', 'João', 'Eduarda', 'Gabriela', 'Any'];
const removidos2 = nomes2.splice(1, Number.MAX_VALUE);
console.log(nomes2, removidos2);

//simulando o pop() = nomes.splice(-1, 1);
//simulando o shift() = nomes.splice(0, 1);
//simulando o push() = nomes.splice(nomes.length, 0, elem1);
//simulando o unShift() nomes.splice(0, 0, elem1);