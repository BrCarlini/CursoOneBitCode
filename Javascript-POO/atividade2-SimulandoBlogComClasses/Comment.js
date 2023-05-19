class Comment{
    constructor(username, content){
        this.userName = username
        this.content = content
        this.createAt = new Date()
    }
}

module.exports = Comment