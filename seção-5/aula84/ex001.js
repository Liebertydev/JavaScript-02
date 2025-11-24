const pessoa = new Map();

pessoa.set('nome', 'Lieberty');
pessoa.set('sobrenome', 'Holanda');
pessoa.set('idade', 19);
pessoa.set('apresentar', (nome, sobrenome, idade) => {
    console.log(`Meu nome ${nome} ${sobrenome} e eu tenho ${idade} anos`);
});

pessoa.get('apresentar')('Lieberty', 'Holanda', 19);

//verificando se existe uma chave
console.log();
console.log(pessoa.has('idade'));

//verificando o tamanho
console.log();
console.log(pessoa.size);

//deletando valores

// pessoa.delete('nome'); comentei pra nao alterar

//limpando tudo com o clear

// pessoa.clear(); comentei pra nao alterar
console.log();
for(let chave of pessoa.keys()) {
    console.log(chave);
}

console.log();
pessoa.forEach((valor, chave) =>  {
    console.log(chave, valor);
});