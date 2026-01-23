const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'test.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');


// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Any'},
//     {nome: 'Lieberty'},
//     {nome: 'Ewellyn'}
// ];

// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo, json);
async function lerArquivo(caminho) {
  try {
    const dados = await ler(caminho);   // string
    const pessoas = JSON.parse(dados);  // objeto JS
    renderizaDados(pessoas);
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err.message);
  }
}

function renderizaDados(dados) {
    console.log(dados);
}
lerArquivo(caminhoArquivo);