function sum(...numbers){
    return numbers.reduce((accum, num) => accum += num, 0)
}