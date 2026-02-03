function index(req, res) {
  res.send(`
    <form action="/" method="POST">
      Nome: <input type="text" name="nome">
      <button>Enviar</button>
    </form>
  `)
}

function trataPost(req, res) {
    res.send('Hey, sou sua nova rota de POST.');
}

module.exports = {
  index,
  trataPost
}
