// Operador ternário
let age = 19
console.log(age >= 18 ? 'Pode dirigir': 'Não pode dirigir')

// If
if(1 == 1) console.log('verdadeiro')

if(1 == 1) {
    console.log('verdadeiro')
}

// If or Else
if(1 == 1) 
    console.log('verdadeiro')
else
    console.log('false')

if(1 == 2) {
    console.log('verdadeiro')
} else {
    console.log('false')
}

// If Else If
let hour = 14

if(hour <= 12){
    console.log('bom dia')
} else if(hour > 18){
    console.log('boa noite')
} else {
    console.log('boa tarde')
}

// Switch
let option = 4

switch(option) {
    case 1 :
        console.log('Option 1')  
    break
    case 2 :
        console.log('Option 2') 
    break
    case 3 :
        console.log('Option 3')
    break
    default:
        console.log('None')
}

// Try Catch Finally
//console.log(unexistent)

try {
    console.log(unexistent)
} catch (e) {
    console.log('Deu erro: ', e.message)
} finally {
    console.log('Fim!')
}