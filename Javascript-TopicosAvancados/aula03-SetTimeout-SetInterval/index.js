console.log("Programa iniciado")

// setTimeout(() => {
//     console.log("3 segundos se passaram desde que o programa foi iniciado")
// }, 1000 * 10)

let seconds = 0 

const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos`)
    if(seconds > 10){
        clearInterval(intervalId)
        console.log("Programa encerrado")
    }
}, 1000 * 3)