const pessoa = {
    nome: 'Luana', 
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// const nome = pessoa.nome;
// console.log(nome);

// padrão:

// const {nome, sobrenome, idade} = pessoa;
// console.log(nome, sobrenome);

// Renomeando variável:

// const {nome: n, sobrenome: s, idade: i} = pessoa;
// console.log(n, s);

// Atribuindo valores padrões:

// const {nome = 'Lee', sobrenome = 'Holanda', forca = 'forte'} = pessoa
// console.log(nome, sobrenome, forca)

//Atribuindo valores e ao mesmo tempo renomeando:

// const {nome: n = 'Lee', sobrenome: s = 'Holanda', forca: f = 19} = pessoa;
// console.log(n, s, f);

// Acessando obj dentro de obj:

// Jeito normal:

// const rua = pessoa.endereco.rua
// const numero = pessoa.endereco.numero
// console.log(rua, numero)

// Usando desestruturação:

// const { endereco: {rua, numero} } = pessoa
// console.log(rua, numero)

// Desestruturando com renomeação e valor padrão:

// const { endereco: {rua: r = 'Sebastian', numero: n = '0'}, endereco} = pessoa
// console.log(r, n, endereco)

//Pegando o resto :

const {nome, ...resto} = pessoa
console.log(resto)