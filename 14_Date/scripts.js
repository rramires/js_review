/* // Date
console.log(new Date())

// Data de início do timestamp
console.log(new Date(0))

// Pega o timestamp
console.log(new Date().getTime())

// Definindo data: AA MM DD
console.log(new Date(2021, 6, 3))
console.log(new Date(2021, 6, 3, 14, 30))
console.log(new Date(2023, 4, 1, 10, 55, 34))
// Usando String
console.log(new Date('2024-07-03T14:30:00'))
console.log(new Date('July 3, 2032 13:35:33')) */

// Pegando 
/* let date = new Date('2021-03-21T13:27:39')
console.log(date)

// Dia da semana, 0-6 domingo = 0
console.log(date.getDay())
// Dia do mes
console.log(date.getDate())
// Mes 0-11 janeiro = 0
console.log(date.getMonth())
// Ano
console.log(date.getFullYear())

// Horas
console.log(date.getHours())
// Minutos
console.log(date.getMinutes())
// Segundos
console.log(date.getSeconds()) */

/* let date = new Date('2021-03-21T13:27:39')
console.log(date)

// Muda o ano
date.setFullYear(1111)
console.log(date)
console.log(date.getTime())
// Muda o mes
date.setMonth(0) // 0 = janeiro
console.log(date)
// Muda o dia
date.setDate(1)
console.log(date)

// Muda a hora
date.setHours(11)
console.log(date)

// Muda os minutos
date.setMinutes(11)
console.log(date)

// Muda os segundos
date.setSeconds(11)
console.log(date) */

/* let date = new Date('2021-01-05T13:27:39')
console.log(date)

function getDateStr(dt){
    return dt.getDate().toString().padStart(2, "0")
}

function getMonthStr(dt){
    let res = ''
    switch(dt.getMonth()){
        case 0:
          res = 'janeiro'
        break
        case 1:
          res = 'fevereiro'
        break
        case 2:
          res = 'março'
        break
        // etc
    }
    return res
}

console.log(`${getDateStr(date)} de ${getMonthStr(date)} de ${date.getFullYear()}`) */


/* let date = new Date('2021-01-05T13:27:39')

console.log(date)
console.log(date.toString())

// Somente a data
console.log(date.toDateString())

// Somente a hora
console.log(date.toTimeString())

// ISO Date - 2021-01-05T16:27:39.000Z
console.log(date.toISOString()) */


/* let date = new Date('2021-01-05T13:27:39')

console.log(date.toLocaleDateString('en'))
console.log(date.toLocaleTimeString('en'))
console.log(date.toLocaleString('en'))

console.log(date.toLocaleDateString('pt-BR'))
console.log(date.toLocaleTimeString('pt-BR'))
console.log(date.toLocaleString('pt-BR'))

console.log(date.toLocaleString('pt-BR', {
    dateStyle: 'short'
}))
console.log(date.toLocaleString('pt-BR', {
    dateStyle: 'long'
}))
console.log(date.toLocaleString('pt-BR', {
    dateStyle: 'medium'
}))
console.log(date.toLocaleString('pt-BR', {
    dateStyle: 'full'
}))
console.log(date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    // etc
}))

// toLocaleString não é exclusivo do Date e sim da localização
let amount = 12.5
console.log(amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})) */

// Intl do js
console.log(Intl.DateTimeFormat().resolvedOptions())

console.log(new Intl.DateTimeFormat('pt-BR').format(new Date()))
console.log(new Intl.DateTimeFormat('en-US').format(new Date()))

// Pegando o timezone
console.log(new Date().getTimezoneOffset()) // em minutos
console.log(new Date().getTimezoneOffset() / 60) // em horas

// Adicionando o timezone
const actualDate = new Date()
console.log(actualDate.toLocaleString()) // 10/10/2025, 5:15:45 PM
// Pegar no formato ISO
console.log(actualDate.toISOString()) // 2025-10-10T20:16:48.708Z
// Tira o Z e adiciona o timezone, ex: +03:00
const dateUTC = new Date('2025-10-10T20:17:54.200+03:00')
console.log(dateUTC.toLocaleString()) 
// Comparar com:
console.log(actualDate.toLocaleString())
