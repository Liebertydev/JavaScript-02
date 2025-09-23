// Modos de fazer desestruturação:

// Modo 1:

// let a = 'A';
// let b = 'B';
// let c = 'C';

// [a, b, c] = ['C', 'B', 'A'];

// console.log(a, b, c);

// Modo 2:

// let a, b, c ;
// [a, b, c] = [1, 2, 3] ;
//console.log(a, b, c) ; 👉 1 2 3

//Usando operador rest(...)

// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [um, dois, tres, ...resto] = numeros;

// console.log(um, dois, tres)
// console.log(resto)

//Acessando Arrays dentro de Arrays:

//                       0          1          2
//                    0  1  2    0  1  2    0  1  2
// const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// console.log(numeros[0][2]);

// ou:
 
//                    0          1          2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista2[2]); // dentro da lista 2, veja o indice 2





