const obj1 = {}
console.log(obj1);
console.log(typeof obj1);

const user = {
    name: 'Fulano',
    email: 'fula@email.com',
    age: 18,
    address: {
        location: 'Rua Bago de Uva',
        number: 122,
        postalCode: '80520000'
    },
    getAddress: function(){
        return `${this.address.location} - ${this.address.number} - CEP: ${this.address.postalCode}`
    }, 
}

console.log(user.name, user.email)
console.log(user.getAddress())

const fullAddr = user.getAddress()
console.log(fullAddr)


const user2 = {} // ou new Object()
user2.name = 'Sicrano'
user2.email = 'sic@email.com'

const user3 = {
    name: '',
    email: '',
    age: 0,
    address: {
        location: '',
        number: 0,
        postalCode: ''
    },
    getAddress: function(){
        return `${this.address.location} - ${this.address.number} - CEP: ${this.address.postalCode}`
    }, 
}

// Optional chaining
const user4 = {
    id: 1,
    name: 'Fulano',
    address: {
        location: 'Rua Bago de Uva',
        number: 666,
        postalCode: '80500000'
    }, 
    getAddress: function(){
        return `${this.address.location} - ${this.address.number} - CEP: ${this.address.postalCode}`
    }, 
}
console.log(user4?.address?.location)
console.log(user4.getAddress?.())

// Coalescencia nula - Somente null ou undefined, false ou 0 não funciona pois dá "true"
let content = null
content = undefined
content = 'Conteúdo da variavel'
content = false
content = 0
console.log(content ?? 'Conteúdo padrão') 
// Funciona com o false ou 0, "igual no if"
console.log(content || 'Conteúdo padrão') 

function createProduct(name){
    const product = {}
    product.name = name
    product.details = function(){
        return `O nome do produto é: ${this.name}`
    }
    return product
}


const prod1 = new createProduct('Notebook')
console.log(prod1.name, prod1.details())

const prod2 = new createProduct('Mouse')
console.log(prod2.name, prod2.details())

console.log(prod1 === prod2)

function createProduct2(name){
    const product = {
        name,
        details: function(){
            return `O nome do produto é: ${this.name}`
        }
    }
    return product
}
const prod3 = new createProduct2('Teclado')
console.log(prod3.name, prod3.details())

function createProduct3(name){
    return {
        name,
        details: function(){
            return `O nome do produto é: ${this.name}`
        }
    }
}
const prod4 = new createProduct3('Fone')
console.log(prod4.name, prod4.details())




