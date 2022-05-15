function speedUp(velocity, acceleration){
    let newVelocity = velocity + acceleration
    console.log("Nova velocidade: " + newVelocity)
    return newVelocity
}

console.log(speedUp(90, 10))
speedUp(100, 20)