function doubleVelocity(velocity, printer){
    console.log("Entrei em doubleVelocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let printVelocity = velocity => {
    console.log("Nova velocidade: " + velocity + "km/s")
}

let new2Velocity = doubleVelocity(60, printVelocity)

console.log(new2Velocity)