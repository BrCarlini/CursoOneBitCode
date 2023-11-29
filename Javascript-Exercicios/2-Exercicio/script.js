// Info Pessoa mais Velha
const nomePessoaMaisVelha = prompt("Informe o nome da pessoa mais velha: ");
const idadePessoaMaisVelha = parseInt(prompt("Informe a idade da pessoa mais velha: "));


// Info Pessoa mais nova
const nomePessoaMaisNova = prompt("Informe o nome da pessoa mais nova: ");
const idadePessoaMaisNova = parseInt(prompt("Informe a idade da pessoa mais nova: "));


// Calculo da diferença de idades, entre a mais velha e a mais nova.
const calculoDiferencaIdade = idadePessoaMaisVelha - idadePessoaMaisNova;

alert(`
Nome da pessoa mais velha: ${nomePessoaMaisVelha}
Sua idade: ${idadePessoaMaisVelha}\n\n
Nome da pessoa mais nova: ${nomePessoaMaisNova}
Sua idade: ${idadePessoaMaisNova}\n\n
Diferença de anos entre elas: ${calculoDiferencaIdade} anos`)