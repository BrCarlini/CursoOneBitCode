const mediaAritmetica = (...numbers) => {
    const totalDaSoma = numbers.reduce((acc, num) => acc += num, 0)
    return totalDaSoma / numbers.length
}



//console.log(`A Media Aritmética Simples é de: ${mediaAritmetica(2, 5, 3, 2)}`)
//console.log(`A Media Aritmética Simples é de: ${mediaAritmetica(3, 6, 10, 9)}`)

module.exports = mediaAritmetica;