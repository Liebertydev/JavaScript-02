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
