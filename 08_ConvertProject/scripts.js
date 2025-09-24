// fields
const amountField = document.getElementById('amount')
const currencyField = document.getElementById('currency')
const form = document.querySelector('form')
const footer = document.querySelector('footer')
const result = document.getElementById('result')
const description = document.getElementById('description')

const DOLAR = 5.28
const EURO = 6.24
const POUND = 7.14

function calc(value, multiplier){
    return value * multiplier
}

function formatCurrencyBRL(value){
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

let amount = 0
let currency = ''

form.addEventListener('submit', function(event){
    event.preventDefault()

    amount = parseFloat(amountField.value)
    //console.log('amount: ', amount)

    currency = currencyField.value
    //console.log('currency: ', currency)

    let res = 0

    if(amount !== 0 && currency){
        switch(currency) {
            case 'USD':
                render(calc(amount, DOLAR), DOLAR, '$')
            break
            case 'EUR':
                render(calc(amount, EURO), EURO, '€')
            break
            case 'GBP':
                render(calc(amount, POUND), POUND, '£')
            break
        }
        //console.log('result: ', result)
        
        footer.classList.add('show-result')
    } else {
        footer.classList.remove('show-result')
    }
})


function render(value, unityValue, symbol){
    
    description.textContent = `1${symbol} = ${formatCurrencyBRL(unityValue)}`
    
    result.textContent = `${formatCurrencyBRL(value)}`
}



