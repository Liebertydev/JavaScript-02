//Convertendo uma String em Array

const nome  = 'Lieberty Wendell Queiroz de Holanda';
const nomes = nome.split(" ");
console.log(nomes);
console.log(nomes instanceof Array);

console.log('');

const nomes2 = ['Lieberty', 'Wendell', 'Queiroz', 'De', 'Holanda'];
const nome2 = nomes2.join(' ');
console.log(nome2);