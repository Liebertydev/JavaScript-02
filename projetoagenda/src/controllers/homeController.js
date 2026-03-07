const Contato = require("../models/ContatoModel");

async function index(req, res) {
  const contatos = await Contato.buscaContatos();
  res.render('index', {
    contatos: contatos
  });
}

module.exports = {
  index
}
