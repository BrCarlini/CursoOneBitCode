const num1 = Number(prompt("Informe o 1° numero: "))
const num2 = Number(prompt("Informe o 2° numero: "))

let opSoma = num1 + num2;
let opSubtracao = num1 - num2;
let opMulti = num1 * num2;
let opDivisao = num1 / num2;


alert(`${num1} + ${num2} = ${opSoma}
${num1} - ${num2} = ${opSubtracao}
${num1} * ${num2} = ${opMulti}
${num1} / ${num2} = ${opDivisao}`)