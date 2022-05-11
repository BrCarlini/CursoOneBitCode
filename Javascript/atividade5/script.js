let nomeNave = prompt("Informe o nome da nave: ")
let contaDobra = 0

while(true){
    let proximaDobra = parseInt(prompt("Deseja realizar a próxima dobra ?\n1 para SIM\n2 para NÃO"))

    if(proximaDobra == 2){
        alert("Navegação encerrada")
        break
    }

    contaDobra++
}

alert(`A nave ${nomeNave} realizou ${contaDobra} dobras.`)