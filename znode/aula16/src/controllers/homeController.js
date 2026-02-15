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
  res.render('index');
  next();
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
