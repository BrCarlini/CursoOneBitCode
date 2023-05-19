const Author = require("./Author")

const author1 = new Author('Bruno Carlini')

const post1 = author1.writePost("Titulo do post", "Lorem ipsum dolor sic...")
post1.addComment("João", "Legal")
post1.addComment("Lucas", "showw")


console.log(post1)
console.log("==================================================================")
console.log(author1)
console.log("==================================================================")



