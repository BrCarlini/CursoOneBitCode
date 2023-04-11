let baralho = ["Carta X", "Carta Y", "Carta Z"];
let menu;

do {

    menu = prompt(`Quantidade de cartas no baralho: ${baralho.length}\n\nMenu:\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair`)

    switch (menu) {

        case "1":
            let nome = prompt("Informe o nome da carta a ser adicionada: ")
            baralho.unshift(nome);
            alert(`Carta --> ${nome} adicionada com sucesso.`)
            break;

        case "2":
            const cartaPuxada = baralho.shift();
            if(!cartaPuxada){
                alert("Não há nenhuma carta no baralho.")
            }else {
                alert(`Carta puxada --> ${cartaPuxada}`)
            }
            break;

        case "3":
            break;

        default:
            alert("Valor inválido.")

    }

} while (menu != "3")