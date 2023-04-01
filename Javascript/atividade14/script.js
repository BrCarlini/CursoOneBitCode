const nomeTurista = prompt("Nome do turista: ")
let nomeDaCidade = "";
let numeroDeCidades = 0;

while(true){

    let confirmaVisita = confirm("Já visitou alguma cidade: ")

    if(confirmaVisita){
        nomeDaCidade += `${prompt("Qual o nome da cidade ?")}; `
        numeroDeCidades++;
    }else {
        break;
    }
}

alert(`Nome: ${nomeTurista}\nQuantas cidades foram visitadas: ${numeroDeCidades}\nQuais cidades: ${nomeDaCidade}`)

