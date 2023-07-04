async function somar(n1, n2){
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        return Promise.reject('N1 e N2 precisam ser do tipo numero')
    }

    return n1 + n2
}


async function execute(){
    try {
        const result = await somar(5, null)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

execute()