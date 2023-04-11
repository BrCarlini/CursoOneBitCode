let menu;

do {

    menu = prompt("Escolha alguma das opções: \n1 - Adicionar\n2 - Remover\n3 - Editar\n4 - Exibir\n5 - Encerrar programa");

    switch (menu) {

        case "1":
            alert("Opção adicionar selecionada.")
            break;
        case "2":
            alert("Opção remover selecionada.")
            break;
        case "3":
            alert("Opção editar selecionada.")
            break;
        case "4":
            alert("Opção exibir selecionada.")
            break;

        case "5":
            alert("Encerrando o sistema")
            break;

        default:
            alert("Opção inválida")
    }



} while (menu != "5")