const Comment = require("./Comment")
const Author = require("./Author")

class Post{
    constructor(title, body, author){
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
        this.createdAt = new Date()
    }

    addComment(username, content){
        this.comments.push(new Comment(username, content))
    }


    viewComents(){
        this.comments.forEach(e => console.log(e))
    }

}

module.exports = Post


/*
const cmmtJoao = new Comment('Joao', 'Comentario do Joao')
const cmmtLucas = new Comment('Lucas', 'Comentario do Lucas')

const post1 = new Post('img teste', 'Titulo teste', 'descrição teste', cmmtJoao)

console.log(post1)
console.log('=============================')
post1.addComments(cmmtLucas)


//console.log(cmmtJoao)
console.log(post1)
*/


/*
teste.viewComents()

teste.addComments('comentario teste 3')

console.log("===============================")

teste.viewComents()
*/