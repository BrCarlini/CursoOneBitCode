class User {

    constructor(fullName, email, password){
        this.fullName = fullName
        this.email = email
        this.password = password
    }

    login(email, password){
        if(email === this.email && password === this.password){
            console.log("Acesso concedido")
        }else{
            console.log("Acesso negado - Email ou senha incorreto")
        }
    }
}

const user1 = new User('Bruno Carlini', 'b@gmail.com', 'xpto')
//console.log(user1)

user1.login(user1.email, user1.password)