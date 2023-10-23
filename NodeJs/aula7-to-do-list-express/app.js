// Importa o framework Express
const express = require('express');

// Chama a função express(), para criar aplicação/ rotas Express
const app = express();

// Para usar Middlewares basta chamar o .use() e dentro dele chamar a verificação desejada
// Nesse exemplo, é chamada a .json() onde verifica se existe algum json e se deve processar esse json, deixando no body da req
app.use(express.json());

const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log)


// .get() Cria uma rota

/* 

1° arg: caminho/rota
2° arg: arrow function passando dois params, um de requisição e outro de resposta

*/
// Rota ('/') raiz
app.get('/', (req, res) => {

    // Responde enviando um h1 no HTML/ document
    res.send('<h1>Minha lista de Tarefas :)</h1>')
})


// Rota ('/json'), com o caminho raiz mais json
app.get('/json', (req, res) => {

    // Responde com um Json
    res.json({title: 'Tarefa X', done: true})
})

app.listen(3000, () => {
    console.log('Servidor foi iniciado')
})