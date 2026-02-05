function index(req, res) {
  res.render('index');
}

function trataPost(req, res) {
    res.send('Hey, Seu formulário foi enviado.');
}

module.exports = {
  index,
  trataPost
}
