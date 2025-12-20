class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    
    //Métodos de instância
    aumentarVolume() {
        if(this.volume == 100) {
            console.log("O volume já está no máximo");
            return;
        }

        this.volume += 2;
    }

    diminuirVolume() {
        if(this.volume = 0) {
            console.log("O volume já está no mínimo");
            return;
        }

        this.volume -= 2;
    }

    //Métodos estáticos

    static trocarPilha() {
        console.log('ok, vou trocar!');
    }
}

const controle = new ControleRemoto('Samsumg');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
ControleRemoto.trocarPilha();
console.log(controle);