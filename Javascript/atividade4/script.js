let anosLuz = prompt("Informe a distância em anos luz: ")

let opcao = parseInt(prompt("Escolha uma opção de conversão:\n1 - Parsec(pc)\n2 - Unidade astronônima(AU)\n3 - Quilômetros(km)"))

switch(opcao){
    case 1:
        let nomeUnidade = "Parsec(pc)"
        let operacao = anosLuz * 0.306601
        alert(`A distância em Anos-luz escolhida foi de ${anosLuz} convertida em ${nomeUnidade} = ${operacao}`)
}