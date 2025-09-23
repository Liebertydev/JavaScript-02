let hora = 23

if (hora >= 0 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else if ( hora >= 18 && hora <= 23) {
    console.log('Boa noite!')
}

/* Regras:

* Podemos usar o if sozinho -> condicional simples
* Podemos usar quantos else if quisermos
* Só podemos usar um else ao todo
* Podemos usar condições em o else if, somente usando if e else

*/