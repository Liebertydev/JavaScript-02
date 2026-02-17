// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//   titulo: 'Outro titulo qualquer',
//   descricao: 'Outra descrição qualquer'
// })
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));
// HomeModel.find()
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));

function index(req, res) {
// req.session.usuario = { nome: 'Lee', logado: true };
// req.flash('sucess', 'Usuário logado com sucesso!');
// req.flash('error', 'Senha inválida');

  console.log(req.flash('error'), req.flash('sucess'));// só funcionam uma vez por login
  console.log(req.session.usuario);
  res.render('index');
  return;
}

function trataPost(req, res) {
    res.send(req.body);
    return;
}

module.exports = {
  index,
  trataPost
}
