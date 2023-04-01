const nomeAtacante = prompt("Informe o nome do personagem atacante: ")
const poderAtaque = Number(prompt("Informe o poder de atacante: "))

const nomeDefensor = prompt("Infome o nome do personagem defensor: ")
let pontosDeVida = Number(prompt("Informe a quantidade de vida do personagem defensor: "))
const poderDefesa = Number(prompt("Informe o poder de defesa: "))
const escudo = window.confirm("O defensor tem escudo ?")

let dano = 0


if(poderAtaque > poderDefesa && escudo === false){
    dano = poderAtaque - poderDefesa;
    
} else if(poderAtaque > poderDefesa && escudo === true){
    dano = (poderAtaque - poderDefesa) / 2;
}


pontosDeVida -= dano

alert(`${nomeAtacante}
       Poder de ataque: ${dano}
       
       ${nomeDefensor}
       Os pontos de vida atual: ${pontosDeVida}
       Poder de defesa: ${poderDefesa}
       Defensor tem escudo ? ${escudo ? "Sim": "Não"}`)