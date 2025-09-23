function relogioGlobal() {
    function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

console.log(criaHoraSegundos(100));


const relogio = document.querySelector('.relogio');
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraSegundos(segundos)
    }, 1000);
}

// function pausaRelogio() {
//     setTimeout(() => {
//         clearInterval(timer)
//     }, 0)
// }


document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        clearInterval(timer);
        iniciaRelogio();
        relogio.classList.remove('pausado');
    }

    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado')
    }

    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        segundos = 0;
        relogio.classList.remove('pausado')
    }


})

// iniciar.addEventListener('click', function (event) {
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function (event) {
//     clearInterval(timer);
//     relogio.classList.add('pausado')
// });

// zerar.addEventListener('click', function (event) {
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00'
//     segundos = 0;
//     relogio.classList.remove('pausado')
// });\

}
relogioGlobal()

