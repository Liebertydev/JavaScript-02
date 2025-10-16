let pesoTxt = document.getElementById("peso");
let alturaTxt = document.getElementById("altura");
let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let peso = Number(pesoTxt.value);
    let altura = Number(alturaTxt.value);

    if (pesoTxt.value == "" || alturaTxt.value == "") {
        alert("Você deixou algum campo em branco");
        return;
    }

    if (!peso) {
        MostrarImc("Peso inválida", false);
        return;
    }

    if (!altura) {
        MostrarImc("Altura inválida", false);
        return;
    }

    let imc = getImc(peso, altura);
    let nivelImc = getNivelImc(imc);
    let msg = `Seu Imc é ${imc} (${nivelImc})`
    MostrarImc(msg, true);
});

function getNivelImc(imc) {
    let nivelImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc > 40) {
        return nivelImc[5];
    } else if (imc > 34.9) {
        return nivelImc[4];
    } else if (imc > 29.9) {
        return nivelImc[3];
    } else if (imc > 24.9) {
        return nivelImc[2];
    } else if (imc > 18.5) {
        return nivelImc[1];
    } else if (imc < 18.5) {
        return nivelImc[0];
    }
}

function getImc(peso, altura) {
    let imc = peso/(altura**2);
    return imc.toFixed(2);
}

function criaP() {
    let p = document.createElement("p");
    return p;
}

function MostrarImc(msg, isvalid) {
    let resultado = document.getElementById('resultado');
    resultado.innerText = '';
    let p = criaP();
    if (isvalid) {
        p.classList.add('paragrafo-true');
    } else {
        p.classList.add('paragrafo-false')
    }
    p.innerText = msg;
    resultado.appendChild(p);

}