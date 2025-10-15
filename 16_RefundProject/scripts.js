// HTML Elements
const amountUI = document.getElementById('amount')

// Amount mask
amountUI.oninput = function(){
    // Deixa somente números
    let value = amountUI.value.replace(/\D/g, '')

     value = Number(value) / 100

    amountUI.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value){
    value = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return value
}