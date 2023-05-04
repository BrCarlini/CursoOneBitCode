const mode = (...numbers) => {
    // [ [n, qtd], [n, qtd], [n, qtd] ]
    const quantities = numbers.map(num => [
      num,
      numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
  }
  
  console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)