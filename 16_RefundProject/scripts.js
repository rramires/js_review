// HTML Elements
const expenseList = document.getElementById('expenses')
const refundForm = document.getElementById('refund')
const expenseInput = document.getElementById('expense')
const categorySelect = document.getElementById('category')
const amountInput = document.getElementById('amount')

// Listners
amountInput.addEventListener('input', (event) => { 
    const input = event.target
    // replace
    input.value = formatCurrencyBRL(input.value)
})

refundForm.addEventListener('submit', (event) => {
    event.preventDefault()
    //console.log(newExpense)
    addExpense()
})

// functions
function formatCurrencyBRL(value) {
    // somente números
    value = value.replace(/\D/g, '')
    // converte para number e adiciona 2 casas
    value = Number(value) / 100
    // formata pra real
    value = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
    return value
}

function addExpense(){

    const newExpense = {
        id: new Date().getTime(),
        expense: expenseInput.value,
        categoryId: categorySelect.value,
        categoryName: categorySelect.options[categorySelect.selectedIndex].text,
        amount: amountInput.value,
        createdAt: new Date()
    }

    try {
        // item 
        const expenseItem = document.createElement('li')
        expenseItem.classList.add('expense')

        // sub-itens
        const expenseIcon = document.createElement('img')
        expenseIcon.setAttribute('src', `img/${newExpense.categoryId}.svg`)
        expenseIcon.setAttribute('alt', newExpense.categoryName)

        const expenseInfo = document.createElement('div')
        expenseInfo.classList.add('expense-info')
        const expenseName = document.createElement('strong')
        expenseName.textContent = newExpense.expense
        const expenseCategory = document.createElement('span')
        expenseCategory.textContent = newExpense.categoryName
        expenseInfo.append(expenseName, expenseCategory)

        const expenseAmount = document.createElement('div')
        expenseAmount.classList.add('expense-amount') 
        expenseAmount.innerHTML = newExpense.amount.toUpperCase().replace('R$', '<small>R$</small>')

        const removeIcon = document.createElement('img')
        removeIcon.classList.add('remove-icon')
        removeIcon.setAttribute('src', `img/remove.svg`)
        removeIcon.setAttribute('alt', 'Remover')

        // add to li
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)

        // add item to ul
        expenseList.append(expenseItem)
        
    } catch (error) {
        alert('Não foi possível adicionar a despesa!')
        console.log(error)
    }
}




