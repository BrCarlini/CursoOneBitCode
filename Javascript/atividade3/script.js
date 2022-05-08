let nome = prompt("Informe seu nome: ")
let velocidade = 0
let perguntaVelocidade = prompt("Que velocidade gostaria de acelerar a nave: ")

let confirmVel = confirm(`Confirma aceleração para velocidade ${perguntaVelocidade}Km/h ?`)

if(confirmVel == true){
    velocidade = perguntaVelocidade
    alert(`Velocidade alterada para ${velocidade}Km/h.`)
} else{
    while(confirmVel != true){
        confirmVel = confirm(`Confirma aceleração para velocidade ${perguntaVelocidade}Km/h ?`)
    }
}

if(velocidade == 0){
    alert("Nave está parada, Considere partir e aumentar a velocidade.")
} else if(velocidade < 40) {
    alert("Você está devagar, podemos aumentar mais.")
} else if(velocidade >= 40 && velocidade < 80){
    alert("Parece uma boa velocidade para manter.")
} else if(velocidade >= 80 && velocidade < 100){
    alert("Velocidade alta. Considere diminuir.")
} else if(velocidade >= 100){
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert(`Nome do piloto(a): ${nome}\nVelocidade atual: ${velocidade} Km/h`)