let imoveis = [
    {
        nomeProprietario: "Bruno Carlini",
        quantidadeDeQuarto: "3",
        quantidadeDeBanheiro: "2",
        garagem: true
    },
    {
        nomeProprietario: "Beatriz",
        quantidadeDeQuarto: "3",
        quantidadeDeBanheiro: "3",
        garagem: true
    }
]

let exibirTodosImoveis = "";

let menu;

do{

    let dadosImovel = new Object

    menu = prompt(`Imóveis cadastrados: ${imoveis.length}\n\nMenu:\n1 - Cadastrar imóveis\n2 - Exibir imóveis\n3 - Sair`);

    switch(menu){

        case "1":
            dadosImovel.nomeProprietario = prompt("Informe o nome do proprietário do imóvel: ");
            dadosImovel.quantidadeDeQuarto = prompt("Informe a quantidade de quartos do imóvel: ");
            dadosImovel.quantidadeDeBanheiro = prompt("Informe a quantidade de banheiros do imóvel: ");
            dadosImovel.garagem = confirm("Imóvel possui garagem ? ");
            imoveis.push(dadosImovel)
            break;
        
        case "2":
            imoveis.forEach(imovel => {
                
                exibirTodosImoveis += `Nome do proprietário: ${imovel.nomeProprietario}\nQuantidade de quartos: ${imovel.quantidadeDeQuarto}\nQuantidade de banheiros: ${imovel.quantidadeDeBanheiro}\nPossui garagem: ${imovel.garagem}\n\n`;

            })

            alert(exibirTodosImoveis);
            
            break;

        case "3":
            break;

        default:
            alert("Opção inválida")
    }



}while(menu != "3")