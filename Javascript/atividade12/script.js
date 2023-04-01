const nomeAtacante = prompt("Informe o nome do personagem atacante: ")
const poderAtaque = Number(prompt("Informe o poder de atacante: "))

const nomeDefensor = prompt("Infome o nome do personagem defensor: ")
let pontosDeVida = Number(prompt("Informe a quantidade de vida do personagem defensor: "))
const poderDefesa = Number(prompt("Informe o poder de defesa: "))
const escudo = window.confirm("O defensor tem escudo ?")

let dano;


if(poderAtaque > poderDefesa && escudo === false){
    dano = poderAtaque - poderDefesa;
    
} else if(poderAtaque > poderDefesa && escudo === true){
    dano = (poderAtaque - poderDefesa) / 2;
} else{
    dano = 0;
}


pontosDeVida -= dano

alert(`O Atacante ${nomeAtacante} causou ${dano} de dano no Defensor ${nomeDefensor}.
        Os pontos de vida atual do defensor é de ${pontosDeVida}`)