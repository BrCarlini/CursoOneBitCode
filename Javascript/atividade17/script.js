const numero = Number(prompt("Informe algum número para calcular sua tabuada: "));
let resultado = "";

for(let i = 1; i <= 20; i++){
    resultado += `${i} x ${numero} = ${i * numero}\n`
    
}

alert(`Resultado da Tabuada do 1 ao 20 do número ${numero}:\n${resultado}`)