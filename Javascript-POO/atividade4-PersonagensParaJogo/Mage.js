const Character = require("./Character")

class Mage extends Character {
    constructor(name, ptsLife, atk, def, ptsMagic=0){
        super(name, ptsLife, atk, def)
        this.ptsMagic = ptsMagic

    }


    attack(characterTarget){
        const ptsAtkReal = (this.atk - characterTarget.def) + characterTarget.ptsMagic

        if(ptsAtkReal > 0){
            characterTarget.ptsLife -= (ptsAtkReal)
        }
        
        return `${characterTarget.name} sofreu um ataque de ${ptsAtkReal > 0 ? ptsAtkReal: 0}pts - Pontos de vida atual: ${characterTarget.ptsLife}pts`
    }

    

    increasePtsLife(characterTarget){
        const ptsIncrease = this.ptsMagic * 2
        characterTarget.ptsLife += ptsIncrease

        return `${this.name} aumentou ${ptsIncrease}pts de vida para ${characterTarget.name} - Vida atual: ${characterTarget.ptsLife}`

    }


}


module.exports = Mage
