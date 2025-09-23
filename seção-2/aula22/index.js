// Avaliação de Curto-Circuito (Short-Circuit)

/* Exemplos de Truthy:

-> true
-> "oi"
-> 42
-> {}
-> []

Exemplos de Falsy:

-> false
-> 0
-> ' '
-> null
-> undefined
-> NaN

*/

/* Na pratica o &&:

* console.log('Luiz' && 'Maria') -> Retorna Maria, pois o && precisa que todos sejam truthy, então ele vai até o final

* console.log('Luiz' && '' && 'Maria') -> retorna '' vazio/falsy, pois o && só precisa de um falsy

* function falaOi() {
    console.log('Oi')
}

const vaiExecutar = 'Joao'
console.log(vaiExecutar && falaOi())  -> executa a function, pois o && precisa ir até o fim pra ver se todos são truthy
*/

/* Na prática o ||:

* console.log(0 || false || 'Lee' || true) -> executa o 'Lee', poi o || só precisa que um seja truthy

* const corUsuario = null
  const corPadrao = corUsuario || 'Preto'

  se o usuario digitar alguma cor(truthy) -> a cor padrão é a digitada
  se o usuário não digitar nada(falsy) a cor padrão é 'Preto'

*/