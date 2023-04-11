const palavra = prompt("Informe alguma palavra que gostaria de saber se é um palíndromo: ").toLowerCase();
let palavraInvertida = "";


for(let i = 0; i <= palavra.length - 1; i++){
    palavraInvertida += palavra[(palavra.length - 1) - i]
}

if(palavraInvertida === palavra){
    alert(`A palavra ${palavra} é um palíndromo.`)
}else {
    alert(`A palavra ${palavra} NÃO é um palíndromo.\nPalavra invertida: ${palavraInvertida}`)
}


