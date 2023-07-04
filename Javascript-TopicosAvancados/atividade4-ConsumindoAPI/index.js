

function createCard(dataTransaction) {
    const fieldTransaction = document.querySelector('.container-transactions')
    console.log(fieldTransaction)

    const cardTransaction = document.createElement('div')
    cardTransaction.classList.add('cardTransaction')
    cardTransaction.id = `cardTransaction-${dataTransaction.id}`

    const nameTransaction = document.createElement('h4')
    nameTransaction.textContent = dataTransaction.name

    const valueTransaction = document.createElement('p')
    valueTransaction.textContent = `R$${dataTransaction.value}`


    const divBtn = document.createElement('div')
    divBtn.classList.add('container-btn-card')

    const btnDeleteCard = document.createElement('button')
    btnDeleteCard.classList.add('card-btn-config', 'btn-deletar')
    btnDeleteCard.textContent = 'Deletar'

    const btnEditCard = document.createElement('button')
    btnEditCard.classList.add('card-btn-config')
    btnEditCard.textContent = 'Editar'


    divBtn.append(btnEditCard, btnDeleteCard)

    cardTransaction.append(nameTransaction, valueTransaction, divBtn)

    fieldTransaction.appendChild(cardTransaction)


}


async function fetchTransactions() {
    const transactions = await fetch("http://localhost:3000/transactions").then(res => res.json())
    transactions.forEach(createCard)

}



async function loadBalance() {
    const transactions = await fetch("http://localhost:3000/transactions").then(res => res.json())
    let totalBalance = 0;
    transactions.forEach(transaction => {
        let acc = 0;
        acc = totalBalance + Number(transaction.value)
        totalBalance = acc
    })


    const containerBalance = document.querySelector('.container-balance')

    const balance = document.createElement('p')
    balance.classList.add('balance')
    balance.textContent = `Saldo: R$${totalBalance}`

    containerBalance.append(balance)
}



document.addEventListener('DOMContentLoaded', () => {
    fetchTransactions()
    loadBalance()
    addTransaction()
})



function addTransaction() {
    const form = document.querySelector('form')

    form.addEventListener('submit', async (ev) => {
        ev.preventDefault()

        const cardData = {
            name: document.querySelector('#name').value,
            value: document.querySelector('#value').value
        }

        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cardData)
        })

        const savedTransaction = await response.json()
        form.reset()
        renderTransaction(savedTransaction)

        //console.log(savedArticle)
    })
}


