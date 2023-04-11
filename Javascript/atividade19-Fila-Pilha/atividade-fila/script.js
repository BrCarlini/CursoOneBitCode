let menu;
let listaPaciente = []
let listaPacienteEditada = []


function addPaciente(nomePaciente){
    listaPaciente.push(nomePaciente)
    
}


function mostraListaPacienteEditada(){
    for (let i = 0; i < listaPaciente.length; i++) {
        listaPacienteEditada.push(`\n${i + 1}º - ${listaPaciente[i]}`)
    }
}


do {

    mostraListaPacienteEditada()

    
    

    menu = prompt(`Lista de Pacientes em espera: ${listaPacienteEditada}.\n\nMenu:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair`)

    switch (menu) {

        case "1":
            let nomePaciente = prompt("Informe o nome do novo paciente: ")
            addPaciente(nomePaciente)
            break;
            
        case "2":
            let pacientePresente = listaPaciente.shift()

            if(pacientePresente != undefined){
                alert(`Paciente ${pacientePresente} consultado com sucesso.`)
            }else {
                alert("Sem paciente para consulta.")
            }

            break;

        case "3":
            continue;

        default:
            alert("Opção inválida.")



    }

    listaPacienteEditada = [];



} while (menu != "3")
