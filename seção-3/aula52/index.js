(function (idade, peso, forca) {
    const sobrenome = 'Holanda';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luana'));
    }

    falaNome();

    console.log(idade, peso, forca);
    

})(10, 20 , 30);

 