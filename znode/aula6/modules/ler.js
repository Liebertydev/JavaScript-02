// modules/ler.js
const fs = require('fs').promises;

module.exports = async function ler(caminho) {
    try {
        const dados = await fs.readFile(caminho, 'utf8');
        return dados;
    } catch(e) {
        console.log(e);
    }
  
};
