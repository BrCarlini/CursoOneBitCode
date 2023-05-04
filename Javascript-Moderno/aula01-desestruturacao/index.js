const person = {
    name: "Bruno",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}

const name = person.name;

const {job, parents} = person
console.log(job)


const [father, mother] = parents

function createUser({name, job, parents}){
    const id = Math.floor((Math.random()) * 9999)

    return {
        id,
        name,
        job,
        parents
    }
}

const dadosBruno = createUser(person)

console.log(dadosBruno)