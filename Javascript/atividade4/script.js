let anosLuz = prompt("Informe a distância em anos luz: ")

let opcao = parseInt(prompt("Escolha uma opção de conversão:\n1 - Parsec(pc)\n2 - Unidade astronônima(AU)\n3 - Quilômetros(km)"))

let nomeUnidade
let operacao

switch(opcao){
    case 1:
        nomeUnidade = "Parsec(pc)"
        operacao = anosLuz * 0.306601
        alert(`A distância em Anos-luz escolhida foi de ${anosLuz} convertida em ${nomeUnidade} = ${operacao}`)
        break
    case 2:
        nomeUnidade = "Unidade Astronônima(AU)"
        operacao = anosLuz * 63241.1
        alert(`A distância em Anos-luz escolhida foi de ${anosLuz} convertida em ${nomeUnidade} = ${operacao}`)
        break
    case 3:
        nomeUnidade = "Quilômetros(km)"
        operacao = anosLuz * 9.5 * Math.pow(10, 12)
        alert(`A distância em Anos-luz escolhida foi de ${anosLuz} convertida em ${nomeUnidade} = ${operacao}`)
        break
    default:
        alert(`Distância em Anos-Luz: ${anosLuz}\nUnidade não identificada: Conversão fora do escopo.`)
}