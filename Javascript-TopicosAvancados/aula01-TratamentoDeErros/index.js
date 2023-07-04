function sum(a, b) {
    const n1 = Number(a)
    const n2 = Number(b)

    if (isNaN(n1) || isNaN(n2)) {
        throw new Error('Os dois argumentos precisam ser numeros')
    }

    return n1 + n2
}


try {
    console.log(sum(2, 9))
    console.log(sum(true, 14))
    // console.log(sum(undefined, 22))
    console.log(sum(18, "0"))
    console.log(sum(39, null))
    // console.log(sum(13, "zero"))
}catch(error) {
    console.log("Ocorreu um erro!")
    console.log(error.message)
} finally{
    console.log("Programa encerrado")
}