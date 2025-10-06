let message = 'Minha String'
console.log(message)

// case
console.log(message.toUpperCase())
console.log(message.toLowerCase())
console.log(message)

// comprimento
console.log(message.length)

let value = 12345
console.log(String(value).length)

// substituir
let result = message.replace('Mi', '12345')
console.log(result)

result = message.replace(/[ia]/g, '666')
console.log(result)

// fatia
result = message.slice(1, 9)
console.log(result)

result = message.slice(-6)
console.log(result)

// mascara
const cCard = '1234123412348888'
const lastDigits = cCard.slice(-4)
console.log(lastDigits)
result = lastDigits.padStart(cCard.length, 'X')
// result = lastDigits.padEnd(cCard.length, 'Y')
console.log(result)

const txt = 'Estudar, Aprender, Praticar'
result = txt.split(', ')
console.log(result)
console.log(result[2])

result = txt.split(', ').join('')
console.log(result)
result = txt.split(', ').join(' - ')
console.log(result)

// buscando
message = 'Estou estudando Js'
console.log(message.indexOf('est'))
console.log(message.indexOf('6')) // -1 se não encontrar

// verifica se existe
console.log(message.includes('est'))
console.log(message.includes('6'))