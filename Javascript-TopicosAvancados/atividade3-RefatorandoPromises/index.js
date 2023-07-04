async function calcularImc(peso, altura) {
    const imc = Math.floor(peso / (altura * altura))

    if (typeof peso === 'number' && typeof altura === 'number') {
        return imc
    } else {
        return Promise.reject(`Peso é do tipo: ${typeof peso}\nAltura é do tipo: ${typeof altura}\nAmbos argumentos precisam ser do tipo Number.`)
    }

}

async function executa(peso, altura) {
    
    try {
        console.log(`Calculando o IMC para o peso ${peso} e altura ${altura}...`)
        const result = await calcularImc(peso, altura)

        let statusIMC = ""
        console.log(`Seu IMC é de ${result}`)

        if (result < 18.5) {
            statusIMC = "Magreza"
        } else if (result >= 18.5 && result <= 24.9) {
            statusIMC = "Normal"
        } else if (result >= 25 && result <= 29.9) {
            statusIMC = "Sobrepeso"
        } else if (result >= 30 && result <= 39, 9) {
            statusIMC = "Obesidade"
        } else if (result > 40) {
            statusIMC = "Obesidade Grave"
        }

        console.log(`Status: ${statusIMC}`)



    } catch (err) {
        console.log(`Erro: \n${err}`)
    }
}

executa(71, 1.74)
executa(48, 1.60)
executa(71, "texto")
executa(82, 1.72)
executa(120, 1.80)