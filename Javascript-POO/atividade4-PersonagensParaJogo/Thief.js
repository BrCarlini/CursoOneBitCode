const Character = require('./Character')

class Thief extends Character {
    constructor(name, ptsLife, atk, def){
        super(name, ptsLife, atk, def)
    }

    attack(characterTarget){
        const ptsAtkReal = (this.atk - characterTarget.def) * 2

        if(ptsAtkReal > 0){
            characterTarget.ptsLife -= (ptsAtkReal)
        }
        
        return `${characterTarget.name} sofreu um ataque de ${ptsAtkReal > 0 ? ptsAtkReal: 0}pts - Pontos de vida atual: ${characterTarget.ptsLife}pts`
    }
}

module.exports = Thief


/*
const playerAttack = new Thief('BrCarlini', 500, 50, 25)
const playerDefenser = new Thief('Brupa', 600, 20, 80)

console.log(playerAttack)
console.log(playerDefenser)
console.log(playerAttack.attack(playerDefenser))
console.log(playerDefenser)
*/