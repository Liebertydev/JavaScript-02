let numero = Number(prompt('Digite um número: '));
let numRes = document.getElementById('num-title');
let texto = document.getElementById('texto')

numRes.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondando pra baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondando pra cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`
