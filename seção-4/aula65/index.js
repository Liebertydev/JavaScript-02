const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2);
const a3 = a1.concat(a2, [7, 8, 9], 'Lee');
//Também da pra fazer usando o spread operator -> ...
//const a3 = [...a1, ...a2, ...[7, 8 ,9], 'Luiz']; pegou os elementos de a1 e a2
console.log(a3);

