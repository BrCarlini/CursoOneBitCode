let nomeNave = prompt("Informe o nome da nave: ")
let velocidadeNave = 0


function acelerar(){
    velocidadeNave += 5
    alert(`Acelerando 5km/s.\nVelocidade aumentada para ${velocidadeNave}km/s`)
}

function desacelerar(){
    if(velocidadeNave > 0){
        velocidadeNave -= 5
        alert(`Desacelerando 5km/s.\nVelocidade diminuida para ${velocidadeNave}km/s`)
    } else{
        alert("A velocidade não pode ficar com o valor negativo.")
    }
    
}

function imprimirDadosBordo(){
    alert(`Nome da Nave: ${nomeNave}\nVelocidade atual: ${velocidadeNave}km/s`)
}

function menu(){
    while(true){
        let opcoes = parseInt(prompt("Escolha uma das opções:\n1 - Acelerar a nave em 5km/s\n2 - Desacelerar em 5km/s\n3 - Imprimir dados de bordo\n4 - Sair do programa"))

        if(opcoes == 4){
            alert(`Programa encerrado!!\nNome da nave: ${nomeNave}\nVelocidade Atual: ${velocidadeNave}km/s`)
            break
        } 

        switch(opcoes){
            case 1:
                acelerar()
                break
            case 2:
                desacelerar()
                break
            case 3:
                imprimirDadosBordo()
                break
            default:
                continue
        }
    }
}

menu()