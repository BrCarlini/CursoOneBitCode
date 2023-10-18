// Importando a biblioteca http
const http = require('http');

// Cria o servidor
const server = http.createServer((req, res) => {

})


// Fica ouvindo/ verificando a porta 3000 
//1° parametro: Porta 
//2° parametro: Função que executa quando a porta/servidor estiver ok
server.listen(3000, () => {
    console.log('Porta 3000 ativa')
})