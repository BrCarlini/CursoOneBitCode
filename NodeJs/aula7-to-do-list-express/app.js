// Importa o framework Express
const express = require('express');

// Importa o modulo/biblioteca Path para trabalhar com arquivos e diretórios
const path = require('path')

// Importa a rota que queros utilizar
// Rota checklist
const checkListRouter = require('./src/routes/checklist')

// Rota index
const rootRouter = require('./src/routes/index')

// Importa o database 
require('./config/database');

// Chama a função express(), para criar aplicação/ rotas Express
const app = express();

// Para usar Middlewares basta chamar o .use() e dentro dele chamar a verificação desejada
// Nesse exemplo, é chamada a .json() onde verifica se existe algum json e se deve processar esse json, deixando no body da req
//app.use(express.json());





// Configura onde as Views vão ficar, passando no 2°arg o path.join para juntar duas rotas
// __dirname diretorio atual
// src/views pasta onde vai estar a views
app.set('views', path.join(__dirname, 'src/views'))

// Informa que os arquivos estaticos vao estar no diretorio public
app.use(express.static(path.join(__dirname, 'public')))

// Instala a view engine
app.set('view engine', 'ejs')

/*
const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log)

*/


// Usando/importando arquivo de rotas(Router) como Middlewares
app.use('/checklists', checkListRouter)

app.use('/', rootRouter)



// Porta que nossa aplicação esta disponivel
app.listen(3000, () => {
    console.log('Servidor foi iniciado')
})