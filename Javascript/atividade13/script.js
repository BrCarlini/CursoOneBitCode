const metro = Number(prompt("Informe o valor em metros: "));

const opcao = Number(prompt("Converter em: \n1 - milímetro(mm)\n2 - centímetro(cm)\n3 - decímetro(dm)\n4 - decâmetro(dam)\n5 - hectômetro(hm)\n6 - quilômetro(km)"));

let valorConvertido;

switch (opcao) {

    case 1:
        valorConvertido = metro * 1000;
        alert(`Valor em metros: ${metro}\nValor em milímetro(mm): ${valorConvertido}`)
        break;

    case 2:
        valorConvertido = metro * 100;
        alert(`Valor em metros: ${metro}\nValor em centímetro(cm): ${valorConvertido}`)
        break;

    case 3:
        valorConvertido = metro * 10;
        alert(`Valor em metros: ${metro}\nValor em decímetro(dm): ${valorConvertido}`)
        break;

    case 4:
        valorConvertido = metro / 10;
        alert(`Valor em metros: ${metro}\nValor em decâmetro(dam): ${valorConvertido}`)
        break;

    case 5:
        valorConvertido = metro / 100;
        alert(`Valor em metros: ${metro}\nValor em hectômetro(hm): ${valorConvertido}`)
        break;

    case 6:
        valorConvertido = metro / 1000;
        alert(`Valor em metros: ${metro}\nValor em quilômetro(km): ${valorConvertido}`)
        break;
    
    default:
        alert(`Opção inválida.`)

}
