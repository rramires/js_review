// Ver conteúdo do document
//console.log(document)

// Ver o titulo
// console.log(document.title)
//document.title = 'Mudei o título'

// Pegando pelo ID
//const guest = document.getElementById('guest-1')
// console.log(guest)
// Mostra as propriedades
// console.dir(guest)

// Pegando pela classe
//const guestsByClass = document.getElementsByClassName('guest')
/* console.log(guestsByClass)
console.log(guestsByClass[0])
console.log(guestsByClass.item(1))
console.log(guestsByClass.item(2)) // null
console.log(guestsByClass[2]) // undefined */

// Pegando pela tag
//const guestsByTag = document.getElementsByTagName('li')
//console.log(guestsByTag)

/* // Pegando pela query
let guestsByQuery
// por ID
guestsByQuery = document.querySelector('#guest-1')
//console.log(guestsByQuery)

// por classname 
// querySelector retorna o primeiro
guestsByQuery = document.querySelector('.guest')
//console.log(guestsByQuery)

// querySelectorAll retorna todos que der match
guestsByQuery = document.querySelectorAll('.guest')
//console.log(guestsByQuery)

// querySelectorAll retorna todos que der match
guestsByQuery = document.querySelectorAll('li:first-child')
//console.log(guestsByQuery[0]) */

// Pega o conteúdo em texto
//const guest = document.getElementById('guest-1')
//console.log(guest.textContent)
// Atribuindo - Cuidado! Substituiu a span dentro do li
//guest.textContent = 'Ricardo'
//console.log(guest)

// Resumo
// retorna o texto - com o conteúdo oculto, note o espaco junto
//console.log(guest.textContent)

// retorna o texto - somente o que for visível
//console.log(guest.innerText)

// retorna o html de dentro do elemento
//console.log(guest.innerHTML)

//const input = document.querySelector('#name')
// adicionar classes - input-error classe criada lá no css
//input.classList.add('input-error')
// remover classes
//input.classList.remove('input-error')

// liga-desliga / adiciona - remove
//input.classList.toggle('input-error')
//input.classList.toggle('input-error')

//const button = document.querySelector('button')
// setando estilo
//button.style.backgroundColor = 'red'

/* const guests = document.querySelector('ul')

// criando os elementos
const newGuest = document.createElement('li')
// adiciona o id 
newGuest.id = 'guest-0'
// adicionado a classe para exibir os estilos
newGuest.classList.add('guest')

const guestName = document.createElement('span')
guestName.textContent = 'Ricardo'

// append adiciona no final - adiciona o span no li 
newGuest.append(guestName)

// prepend adiciona no início
guests.prepend(newGuest)
console.log(guests) */ // exibe a ul e seu conteudo

/* const input = document.querySelector('#name')
// setAttribute manipula atributos - 'atributo', valor
//input.setAttribute('disabled', true)
//input.setAttribute('type', 'radio')

// remove um atributo
input.removeAttribute('id') */

// Eventos
/* window.addEventListener('load', function(){
    console.log('A página foi carregada!')
})

addEventListener('click', function(event){
    event.preventDefault()
    //console.log(event)
    console.log(event.type)
    console.log(event.target)
    console.log(event.currentTarget)
}) */

/* const ul = document.querySelector('ul')

ul.addEventListener('scroll', function(event){
    //console.log(event.type)
    //console.log(event.target)
    //
    //console.log(event.target.scrollTop)
    const u = event.target

    if(u.scrollTop > 300){
        u.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}) 

const button = document.querySelector('#btn')

button.addEventListener('click', (e) => {
    e.preventDefault()

    console.log('Clicou em: ', e.target)
})
 */

/* // form events
const form = document.querySelector("form")

form.onsubmit = function(event){
    event.preventDefault()

    console.log('onsubmit: ', event.target)    
}

form.addEventListener('submit: ', function(event){
    event.preventDefault()

    console.log('submit: ', event.target)    
}) */

//const input = document.querySelector('input')

/* input.addEventListener('keyup', function(event){
    console.log(event.key)
    console.log(event.code)
    console.log(event.altKey)
    console.log(event.ctrlKey)
    console.log(event.shiftKey)
}) */

/* input.addEventListener('keypress', function(event){
    console.log(event.key)
    console.log(event.code)
    console.log(event.altKey)
    console.log(event.ctrlKey)
    console.log(event.shiftKey)
}) */

//const input = document.querySelector('input')

/* input.addEventListener('input', function(event){
    //console.log(event.target.value)

    const value = event.target.value

    const regex = /\D+/g

    console.log(value.match(regex)) // retorna array se encontrar algum padrao
    console.log(regex.test(value)) // retorna booleano
}) */ 

const form = document.querySelector('form')
const input = document.querySelector('input')

// Replace
form.addEventListener('submit', function(event){
    event.preventDefault()

    //const regex = /\D+/g // remove letras
    const regex = /\d+/g // remove numeros
    
    input.value = input.value.replace(regex, '')
})












