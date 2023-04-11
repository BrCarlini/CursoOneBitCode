let saldo = Number(prompt("Informe a quantidade de dinheiro inicial: "))

let menu;

do {

    let valor = 0;

    menu = prompt(`Disponível: R$${saldo}\nGostaria de fazer alguma das seguintes operações ?\n1- Depositar\n2- Sacar\n3- Sair`)

    switch (menu) {

        case "1":
            valor = Number(prompt("Informe o valor que gostaria de depositar: "))
            depositar(valor)
            break;


        case "2":
            valor = Number(prompt("Informe o valor que gostaria de sacar: "))
            sacar(valor)
            break;


        case "3":
            alert("Sistema encerrado")
            break;

        default:
            alert("Opção inválida")



    }

} while (menu != "3")



function depositar(valor) {

    if (valor > 0) {
        saldo += valor
        alert(`Valor de R$${valor} depositado com sucesso\n`)
    }else {
        alert("Valor inválido")
    }
}


function sacar(valor) {

    if (saldo >= valor && valor > 0) {
        saldo -= valor
        alert(`Valor de R$${valor} sacado com sucesso\n`)
    } else {
        alert("Valor inválido")
    }

}