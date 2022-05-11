let nomeDaNave = prompt("Informe o nome da nave: ")
let qualSubstituir = prompt("Qual caractere gostaria de substituir ?")
let substituirPor = prompt("Por qual caractere gostaria de substituir ?")

let novoNome = ""

for(i = 0; i < nomeDaNave.length; i++){

    if(nomeDaNave[i] == qualSubstituir){
        novoNome += substituirPor
    } else {
        novoNome += nomeDaNave[i]
    }

}

alert(`O novo nome da nave é ${novoNome}`)