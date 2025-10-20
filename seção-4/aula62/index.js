//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];
console.log(nomes);
nomes[2] = 'João'; //Substituimos o valor do índice 2
console.log(nomes);
delete nomes[2]; // Deletemos o valor do índice 2
console.log(nomes);

//  Valor por referência

const frutas = ['Maçã', 'Banana', 'Uva'];
const novo = frutas; 
//Para copiar use o operador spread = "..."
//  const novo = [...nomes]; Copiamos o valor

novo.pop();
console.log(frutas);


// Como o Pop funciona

const numeros = [1, 2, 3, 4, 5];
const removido = numeros.pop(); //remove e retorna
console.log(numeros, removido);

//como o slice funciona

const nomes2 = ['Lieberty', 'Any', 'Alyne', 'Ana'];
let novo2 = nomes2.slice(1, 3); //vai de any até alyne
console.log(novo2); //  1, 3 = ele corta o indice 0 e 3

// ou

novo2 = nomes2.slice(0, -1); // retira o ultimo elemento
console.log(novo2); // mostra todos menos any