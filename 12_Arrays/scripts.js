const myArray = new Array()
console.log(myArray)

const myArray2 = []
console.log(myArray2)
console.log(myArray2.length)
console.log(myArray2[3])

const myArray3 = new Array(10)
console.log(myArray3)
console.log(myArray3.length)
console.log(myArray3[3])

const fruits = ['Banana', 'Maça', 'Laranja']
console.log(fruits[1])
console.log(fruits[fruits.length -1])

console.log(fruits)

// adiciona no fim
fruits.push('Mamão')
console.log(fruits)

// remove no fim
let result = fruits.pop()
console.log(result)
console.log(fruits)

// adiciona no inicio
fruits.unshift('Kiwi')
console.log(fruits)

// remove no inicio
result = fruits.shift()
console.log(result)
console.log(fruits)

// buscando a posicao
let position = fruits.indexOf('Maça')
console.log(position)
console.log(fruits[position])

// verifica se existe
console.log(fruits.includes('Maça')) // true
console.log(fruits.includes('Limão')) // false

// deletando
fruits.splice(position, 1)
console.log(fruits)
console.log(fruits[position])

const arrayContent = ['Uma String', 10, true, function(){ return 'Funcao dentro do array'}, { nome: 'Fulano', idade: 22 }]
console.log(arrayContent[0])
console.log(arrayContent[1])
console.log(arrayContent[3]())
console.log(arrayContent[4])
console.log(arrayContent[4].nome)

