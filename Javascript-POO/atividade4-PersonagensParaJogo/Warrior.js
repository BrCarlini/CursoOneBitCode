const Character = require("./Character");

class Warrior extends Character {
    constructor(ptsShield, position = true, name, ptsLife, atk, def) {
        super(name, ptsLife, atk, def)
        this.ptsShield = ptsShield
        this.position = position
    }



    attack(characterTarget) {
        const ptsAtkReal = this.atk > characterTarget.def ? this.atk - characterTarget.def : 0

        if (this.position === true) {

            characterTarget.ptsLife -= ptsAtkReal

            return `${characterTarget.name} sofreu um ataque de ${ptsAtkReal}pts - Pontos de vida atual: ${characterTarget.ptsLife}pts`

        } else {
            return `${this.name} está em posição de Defesa, para atacar precisa mudar para posição de ataque`
        }
    }



    alterPosition() {
        const currentPosition = this.position
        let changedPosition = !currentPosition

        if (changedPosition === false) {
            this.ptsLife += this.ptsShield
        }

        return this.position = changedPosition
    }
}

module.exports = Warrior

