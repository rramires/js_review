// HTML Elements
const amountUI = document.getElementById('amount')

// Listners
amountUI.addEventListener('input', (event) => { 
    const input = event.target
    // replace
    input.value = formatCurrencyBRL(input.value)
})
    

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