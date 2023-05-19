class Character {

    constructor(name, ptsLife, atk, def){
        this.name = name
        this.ptsLife = ptsLife
        this.atk = atk
        this.def = def
    }

    attack(characterTarget){
        const ptsAtkReal = this.atk - characterTarget.def

        if(ptsAtkReal > 0){
            characterTarget.ptsLife -= ptsAtkReal
        }
        
        return `${characterTarget.name} sofreu um ataque de ${ptsAtkReal > 0 ? ptsAtkReal: 0}pts - Pontos de vida atual: ${characterTarget.ptsLife}pts`
    }
}

module.exports = Character

/*
const playerAttack = new Character('BrCarlini', 500, 50, 25)
const playerDefenser = new Character('Brupa', 600, 20, 80)

console.log(playerAttack)
console.log(playerDefenser)
console.log(playerAttack.attack(playerDefenser))
console.log(playerDefenser)
*/