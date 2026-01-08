import Pessoa, { nome as nome2, sobrenome, idade, soma} from './modulo1';

const nome = 'Lee';
const p2 = new Pessoa(nome2, sobrenome);

console.log(nome2, sobrenome, idade);
console.log(soma(2, 5));

const p1 = new Pessoa('Lieberty', 'Holanda');
p1.FalarOi();
