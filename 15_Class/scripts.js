/* class Person {
    constructor(name){
        console.log('Olá,', name)
    }
}
const person = new Person('Fulano') */

/* class Product {
    name
    constructor(name){
        this.name = name
    }
}
const product1 = new Product('Notebook')
console.log(product1.name)

const product2 = new Product('Celular')
console.log(product2.name) */

/* class User {
    name
    email

    constructor(name, email){
        this.name = name
        this.email = email
    }

    sendEmail(){
        console.log(`Enviado para ${this.name} - ${this.email}`)
    }
}

const user = new User('Fulano', 'fula@email.com')
user.sendEmail() */

/* class User {

    // showMessage(){
    //     console.log('Mostrou a mensagem 123')
    // }

    static showMessage(){
        console.log('Mostrou a mensagem 123')
    }
}

User.showMessage(); */

/* class Animal {
    name

    constructor(name){
        this.name
    }

    makeNoise(){
        console.log('Faz um som de animal!')
    }
}

class Dog extends Animal{
    
    makeNoise(){
        console.log('Au Au Au !')
    }
}

const dog = new Dog('Rex')
dog.makeNoise()

class Cat extends Animal{
    
    makeNoise(){
        console.log('Miau Miau !')
    }
}

const cat = new Cat('Garfield')
cat.makeNoise()  */

/* const values1 = [1, 2, 3, 4, 5]

const soma = values1.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma); // 15

console.log('-------')

let acumulador = 0
for(let i = 0; i < values1.length ; i++){
    //console.log(i, values1[i])
    const atual = values1[i]
    acumulador += atual
}
console.log(acumulador)

console.log('-------')

// Adiciona um método ou propriedade em um objeto(classe, etc)
Array.prototype.sum = function() {
    let acumulador = 0
    for(let i = 0; i < this.length ; i++){
        const atual = this[i]
        acumulador += atual
    }
    return acumulador
}

console.log(values1.sum())

const values2 = [6, 7, 8]

console.log(values2.sum()) */


/* let obj = []

try {
    obj.execute()
    throw new Error('My Custom Error')

} catch(error) {
    
    if(error instanceof Error){
        console.log(error)
    }
    //console.log(error)
}
 */

// Custom errors
class MyCustomError {
    constructor(message) {
        this.message = `Erro personalizado: ${message}`
    }
}

try {
    throw new MyCustomError('ERRO 5001 !!!')
} catch (error) {

    if(error instanceof MyCustomError){
        console.log(error.message)
    }

    console.log(error)
}