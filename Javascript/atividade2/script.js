// Coleta o nome e a idade da pessoa mais velha
let nomePessoaMaisVelha = prompt('Informe o nome da pessoa mais velha: ') 
let idadePessoaMaisVelha = prompt('Informe a idade da pessoa mais velha: ')

// Coleta o nome e a idade da pessoa mais nova
let nomePessoaMaisNova = prompt('Informe o nome da pessoa mais nova: ')
let idadePessoaMaisNova = prompt('Informe a idade da pessoa mais nova: ') 

let calculaIdade = idadePessoaMaisVelha - idadePessoaMaisNova  // Calcula a diferença de idade


// Exibe a Pessoa mais Velha e a mais Nova
window.alert(`Pessoa mais Velha:\nNome: ${nomePessoaMaisVelha}\nIdade: ${idadePessoaMaisVelha}`)
window.alert(`Pessoa mais Nova:\nNome: ${nomePessoaMaisNova}\nIdade: ${idadePessoaMaisNova}`)

// Exibe a diferença de Idade
window.alert(`A diferença de idade entre ${nomePessoaMaisVelha} e ${nomePessoaMaisNova} é de ${calculaIdade}`)