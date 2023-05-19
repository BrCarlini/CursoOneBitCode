class Vehicle {
    move(){
        console.log('O veículo está se movendo.')
    }
}

class Car extends Vehicle {
    move(){
        console.log('O carro está se movendo.')
    }
}

class Ship extends Vehicle {
    move(){
        console.log('O navio está navegando')
    }
}

class Aircraft extends Vehicle {
    move(speed){
        console.log(`A aeronave está voando a ${speed}Km/h`)
    }
}

const deloran = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

deloran.move()
blackPearl.move()
epoch.move(80)