module.exports.middlewareGlobal = (req, res, next) => {
    console.log();
    
    if(req.body) {
        req.body.nome = req.body.nome.replace('Holanda', 'Não use Holanda');
        console.log();
        console.log(`Vi que você postou ${req.body.nome}`);
        console.log();
    }

    console.log();

    next();
};

module.exports.outroMiddleware = (req, res, next) => {
    console.log('Sou seu outro middleware');
    next();
}