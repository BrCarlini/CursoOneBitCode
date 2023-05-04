const mediaAritmetica = require('./ex1-mediaAritmeticaSimples')

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)

    if(orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]

    return mediaAritmetica(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(1, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)