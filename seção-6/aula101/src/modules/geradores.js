function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumber = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}!@#$%*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiusc, minusc, num, simb) {
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i <= qtd; i++) {
        maiusc && senhaArray.push(geraMaiuscula());
        minusc && senhaArray.push(geraMinuscula());
        num && senhaArray.push(geraNumber());
        simb && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
}