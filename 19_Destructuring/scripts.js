// Desestruturacao de Array
const names = ['Fulano', 'fulano@email.com']
// pegando
const [username, email] = names // names[0] names[1]
console.log('Nome: ', username, 'Email:',  email)

const fruits = ['Banana', 'Maça', 'Laranja']

const [ban] = fruits // <=> fruits[0]
console.log('Fruta: ', ban)

// pulando (deixe em branco, usando as virgulas)
const[,,lar] = fruits
console.log('Fruta: ', lar)

// Desestruturacao de Objetos
const product = {
    nome: 'Teclado', 
    preco: 120
}
console.log(product.nome, product.preco)

const { nome, preco } = product
console.log( nome, preco)

// Objetos como parametros
function newProduct({name, price}){
    console.log(name, price)
}
newProduct({name: 'Mouse', price: 75})
