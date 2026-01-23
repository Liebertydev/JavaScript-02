const fs = require('fs').promises;




module.exports = async function(caminho, dados) {
  try {
    await fs.writeFile(
      caminho,
      dados,
      { encoding: 'utf8', flag: 'w' }
    );

    console.log('Arquivo escrito com sucesso');
  } catch (err) {
    console.error('Erro ao escrever arquivo:', err);
  }
}
