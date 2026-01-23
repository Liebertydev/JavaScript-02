const fs = require('fs').promises;
const path = require('path');

// fs.readdir(path.resolve(__dirname))
//     .then(arquivos => {
//         console.log(arquivos);
//     })
//     .catch(e => {
//         console.log(e);
//     }); 


async function readdir(caminho) {
    if(!caminho) {
        caminho = path.resolve(__dirname);
    }
    const files = await fs.readdir(caminho);
    imprimir(files, caminho);
}

async function imprimir(files, caminho) {
    for(let file of files) {
        const fileFullPath = path.resolve(caminho, file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if(!/\.css/g.test(fileFullPath) && !/\.html/g.test(fileFullPath)) continue; // faz com que somente arquivos html e css sejam mostrados


        console.log(fileFullPath, stats.isDirectory());
    }
}

readdir('C:/Users/Lieberty/Documents/Estudos/JavaScript-02/znode');
