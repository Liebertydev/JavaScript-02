function index(req, res, next) {
  res.render('index');
  console.log(`"Pagina INICIAL: Seu nome é ${req.session.nome}`);
  next();
}

function trataPost(req, res) {
    res.send('Hey, Seu formulário foi enviado.');
}

module.exports = {
  index,
  trataPost
}
