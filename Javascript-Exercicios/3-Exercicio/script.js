const nomePiloto = prompt("Informe seu nome:");
let velocidadeNave = 0;

const aceleracao = parseFloat(prompt("Que velocidade gostaria de acelerar ?"));

const confirmacao = confirm(`Deseja confirmar ? A velocidade esta indo para ${velocidadeNave + aceleracao}km/s`)

if(confirmacao){
    velocidadeNave =+ aceleracao
}else{
    alert(`Aceleração negada pelo piloto ${nomePiloto}`)
}



if(velocidadeNave <= 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade.");
}else if(velocidadeNave < 40){
    alert("Você está devagar, podemos aumentar mais.");
}else if(velocidadeNave >= 40 && velocidadeNave < 80){
    alert("Parece uma boa velocidade para manter.");
}else if(velocidadeNave >= 80 && velocidadeNave < 100){
    alert("Velocidade alta. Considere diminuir.");
}else {
    alert("Velocidade perigosa. Controle automático forçado.");
}

alert(`Nome do piloto: ${nomePiloto}\nVelocidade atual: ${velocidadeNave}km/s`);