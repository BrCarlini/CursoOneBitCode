const Character = require("./Character")
const Mage = require("./Mage")
const Thief = require("./Thief")
const Warrior = require("./Warrior")

const playerAttackCharacter = new Character("CharacterAtk", 500, 50, 20)
const playerDefenserCharacter = new Character("CharacterDef", 500, 30, 20)

console.log(playerAttackCharacter)
console.log(playerDefenserCharacter)
console.log(playerAttackCharacter.attack(playerDefenserCharacter))
console.log(playerDefenserCharacter)

console.log("===========================================================================")


const playerAttackThief = new Thief("ThiefAtk", 500, 50, 20)
const playerDefenserThief = new Thief("ThiefDef", 500, 30, 20)

console.log(playerAttackThief)
console.log(playerDefenserThief)
console.log(playerAttackThief.attack(playerDefenserThief))
console.log(playerDefenserThief)

console.log("===========================================================================")


const playerAttackMage = new Mage("MageAtk", 500, 50, 20, 20)
const playerDefenserMage = new Mage("MageDef", 500, 50, 80, 20)

console.log(playerAttackMage)
console.log(playerDefenserMage)
console.log(playerAttackMage.attack(playerDefenserMage))
console.log(playerDefenserMage)
console.log(playerAttackMage.increasePtsLife(playerDefenserMage))
console.log(playerAttackMage.increasePtsLife(playerDefenserThief))

console.log("===========================================================================")

const playerAttackWarrior = new Warrior(100, true, "WarriorAtk", 500, 100, 10)
const playerDefenserWarrior = new Warrior(100, true, "WarriorDef", 500, 30, 70)

console.log(playerAttackWarrior)
console.log(playerDefenserWarrior)
playerDefenserWarrior.alterPosition()
console.log(playerAttackWarrior.attack(playerDefenserWarrior))
console.log(playerDefenserWarrior)

console.log("=====================================================================")


//playerAttackWarrior.alterPosition()

console.log(playerAttackWarrior)
console.log(playerDefenserWarrior)
console.log(playerAttackWarrior.attack(playerDefenserWarrior))
console.log(playerDefenserWarrior)

//playerAttackWarrior.alterPosition()

console.log(playerAttackWarrior.attack(playerDefenserWarrior))
console.log(playerDefenserWarrior)