alert("Bem-vindo! A seguir pediremos que informe alguns dados");

const nome = prompt("Informe seu nome: ");
const idade = prompt("Informe sua idade: ");

const confirmar = confirm(`Sua idade é ${idade} ?\nSim -> Ok\nNão -> Cancelar`)

if(confirmar){
    alert(`Nome: ${nome}\nIdade: ${idade}\nConfirmou a idade: Sim`)
}else{
    alert(`Nome: ${nome}\nIdade: ${idade}\nConfirmou a idade: Não`)
}