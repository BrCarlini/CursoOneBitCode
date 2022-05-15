let nomeNave = prompt("Informe o nome da nave: ")
let velocidadeNave = 0


function acelerar(){
    velocidadeNave += 5
    alert(`Acelerando 5km/s.\nVelocidade aumentada para ${velocidadeNave}`)
}

function desacelerar(){
    velocidadeNave -= 5
    alert(`Desacelerando 5km/s.\nVelocidade diminuida para ${velocidadeNave}`)
}

function imprimirDadosBordo(){
    alert(`Nome da Nave: ${nomeNave}\nVelocidade atual: ${velocidadeNave}`)

}
let validaOpcao = true

function menu(validaOpcao){
    while(validaOpcao){
        let opcoes = parseInt(prompt("Escolha uma das opções:\n1 - Acelerar a nave em 5km/s\n2 - Desacelerar em 5km/s\n3 - Imprimir dados de bordo\n4 - Sair do programa"))

        if(opcoes == 4){
            alert("Oi")
        }

        
    }
}

menu()