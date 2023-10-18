const process = require('process');

process.stdout.write('Qual o seu nome ? ')

process.stdin.on('data', (keyboard) => {
    process.stdout.write(`Texto do usuario: ${keyboard}`)
    process.exit()
})