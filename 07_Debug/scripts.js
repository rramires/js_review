const input = document.querySelector('input')
const form = document.querySelector('form')

form.onsubmit = (event) => {
    event.preventDefault()

    const value = input.value
    
    const hasNumber = /\d+/g

    const isValid = hasNumber.test(value)

    if(isValid){
        alert('Inválido, contém número!')
    } else {
        alert('Válido, enviado!')
    }
}