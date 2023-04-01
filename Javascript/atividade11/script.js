const nomeVeiculo1 = prompt("Informe o nome do 1° veículo: ");
const velocidadeVeiculo1 = Number(prompt("Informe a velocidade do 1° veículo: "));


const nomeVeiculo2 = prompt("Informe o nome do 2° veículo: ")
const velocidadeVeiculo2 = Number(prompt("Informe a velocidade do 2° veículo: "));

if(velocidadeVeiculo1 > velocidadeVeiculo2){
    alert(`Velocidade do ${nomeVeiculo1} é maior.`)
} else if(velocidadeVeiculo1 < velocidadeVeiculo2){
    alert(`Velocidade do ${nomeVeiculo2} é maior.`)
}else{
    alert("A velocidade de ambos os carros são iguais")
}