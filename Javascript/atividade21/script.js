let menu;

do {

    let base;
    let altura;
    let lado;
    let baseMaior;
    let baseMenor;
    let raio;

    menu = prompt("Menu:\n1 - Área do triângulo\n2 - Área do retângulo\n3 - Área do quadrado\n4 - Área do trapézio\n5 - Área do círculo\n6 - Sair")


    switch (menu) {



        case "1":
            base = Number(prompt("Informe a base: "))
            altura = Number(prompt("Informe a altura: "))
            alert(`Área do triângulo: ${calcularAreaDoTriangulo(base, altura)}`)
            break;

        case "2":
            base = Number(prompt("Informe a base: "))
            altura = Number(prompt("Informe a altura: "))
            alert(`Área do retangulo: ${calcularAreaDoRetangulo(base, altura)}`)
            break;

        case "3":
            lado = Number(prompt("Informe o lado: "))
            alert(`Área do quadrado: ${calcularAreaDoQuadrado(lado)}`)
            break;

        case "4":
            baseMaior = Number(prompt("Informe a base maior: "))
            baseMenor = Number(prompt("Informe a base menor: "))
            altura = Number(prompt("Informe a altura: "))
            alert(`Área do trapézio: ${calcularAreaDoTrapezio(baseMaior, baseMenor, altura)}`)
            break;

        case "5":
            raio = Number(prompt("Informe o raio: "))
            alert(`Área do circulo: ${calcularAreaDoCirculo(raio)}`)
            break;

        case "6":
            break;

        default:
            alert("Opção inválida.")
            
    }

} while (menu != "6")



function calcularAreaDoTriangulo(base, altura) {
    return base * altura / 2;
}


function calcularAreaDoRetangulo(base, altura) {
    return base * altura;
}


function calcularAreaDoQuadrado(lado) {
    return lado * lado;
}


function calcularAreaDoTrapezio(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura / 2;
}


function calcularAreaDoCirculo(raio) {
    const pi = 3.14;

    return pi * (raio * raio);
}


