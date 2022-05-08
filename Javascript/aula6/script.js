let velocity = 101
/*
if (velocity < 40) {
    console.log('Estamos em uma velocidade aceitável')
} else {
    if (velocity <= 100) {
        console.log('Cuidado! Próximo a velocidade de risco')
    } else {
        console.log('Velocidade de Risco!')
    }
} */

if (velocity < 40) {
    console.log('Estamos em uma velocidade aceitável')
} else if (velocity <= 100) {
    console.log('Cuidado! Próximo a velocidade de risco')
} else {
    console.log('Velocidade de Risco!')
}


// Operação ternária

(velocity > 100) ? console.log('Velocidade maior que 100') : console.log('Velocidade menor que 100')