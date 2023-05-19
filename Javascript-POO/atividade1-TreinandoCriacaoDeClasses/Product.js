class Product{

    constructor(name, description, price, inStock = 0){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }

    addToStock(valueAdd){
        this.inStock += valueAdd
    }

    calculateDiscount(ptgDiscount){
        return this.price - (this.price * (ptgDiscount / 100))
    }
}

const product1 = new Product('Playstation 5', 'Console de mesa de alta performance', 5000, 1)
console.log(product1)

product1.addToStock(9)
console.log(product1)

console.log(`Valor com desconto: ${product1.calculateDiscount(10)}`)