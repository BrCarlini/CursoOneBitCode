let listaDeVagas = [];


let menu;


do {
    menu = prompt("Menu:\n" +
        "1 - Listar vagas disponíveis.\n" +
        "2 - Criar uma nova vaga.\n" +
        "3 - Visualizar uma vaga.\n" +
        "4 - Inscrever um candidato em uma vaga.\n" +
        "5 - Excluir uma vaga.\n" +
        "6 - Sair.")


    switch (menu) {

        case "1":
            listarTodasVagas()
            break;

        case "2":
            criarVaga()
            break;

        case "3":
            exibirVagaPeloIndice()
            break;

        case "4":
            inscreverCandidato()
            break;

        case "5":
            excluirVaga()
            break;

        case "6":
            alert("Saindo...")
            break;

        default:
            alert("Opção inválida.")

    }



} while (menu != "6")




function listarTodasVagas() {

    const vagasEmTexto = listaDeVagas.reduce((textoFinal, vaga, indice) => {
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)

}


function exibirVagaPeloIndice() {

    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    const vaga = listaDeVagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos:" + candidatosEmTexto
    )

}


function criarVaga() {

    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe um descrição para a vaga:")
    const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        listaDeVagas.push(novaVaga)
        alert("Vaga criada.")
    }

}



function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
    const vaga = listaDeVagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada")
    }
}



function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = listaDeVagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        listaDeVagas.splice(indice, 1)
        alert("Vaga excluída.")
    }
}