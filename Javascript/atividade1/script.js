alert('Bem-Vindo! A seguir pediremos que informe alguns dados.')

let nome = prompt('Informe seu nome: ')
let idade = prompt('Informe sua idade: ')

alert(`Nome: ${nome}`)
alert(`Idade: ${idade}`)
let confirma = confirm('Você confirma sua idade ?')

if(confirma == true){
    alert('Obrigado por confirmar sua idade! Pode seguir')
}else{
    while(confirma != true){
        confirma = confirm('Você confirma sua idade ?')
    }
}