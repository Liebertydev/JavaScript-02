function index(req, res) {
  res.render('index');
}

function trataPost(req, res) {
    res.send('Hey, sou sua nova rota de POST.');
}

module.exports = {
  index,
  trataPost
}
