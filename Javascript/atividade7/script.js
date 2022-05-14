let nomeNave = prompt("Informe o nome da nava: ")
let nomeInvertido = " "

for(let i = nomeNave.length - 1; i >= 0; i--){
    if(nomeNave[i] == "e"){
        break
    }
    nomeInvertido += nomeNave[i]
}



alert(`Nome original: ${nomeNave}\nNome após ocultação: ${nomeInvertido}`)