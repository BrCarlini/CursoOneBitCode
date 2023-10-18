const fs = require('fs');

/*

writeFile -> Escreve/ cria / sobrescreve tudo, de um arquivo passado no primeiro parametro.

1° arg: o arquivo
2° arg: conteudo/ dado do arquivo
3° arg: função/ excessão de erro

fs.writeFile('test.txt', 'Olá NodeJs', err => {
    console.log(err)
})
*/


/*

appendFile -> Junta o que foi passado no segundo parametro ao arquivo do primeiro parametro.

fs.appendFile('test.txt', ', tudo bem ?', err => {
    console.log(err)
})

*/

/* 

rename -> Renomeia o arquivo

fs.rename('test.txt', 'test2.txt')
*/


// Remove o arquivo colocado no primeiro parametro
fs.unlink('test2.txt', err => console.log(err));
