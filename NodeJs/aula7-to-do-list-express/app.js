// Importa o framework Express
const express = require('express');
const checkListRouter = require('./src/routes/checklist')
require('./config/database');

// Chama a função express(), para criar aplicação/ rotas Express
const app = express();

// Para usar Middlewares basta chamar o .use() e dentro dele chamar a verificação desejada
// Nesse exemplo, é chamada a .json() onde verifica se existe algum json e se deve processar esse json, deixando no body da req
app.use(express.json());

/*
const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log)

*/


// Usando arquivo de rotas como se fosse Middlewares
app.use('/checklists',checkListRouter)


// .get() Cria uma rota

/* 

1° arg: caminho/rota
2° arg: arrow function passando dois params, um de requisição e outro de resposta

*/

app.listen(3000, () => {
    console.log('Servidor foi iniciado')
})