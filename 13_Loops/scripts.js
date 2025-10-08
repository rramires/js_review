// Repetição de trechos de código

// While - Enquanto
/* const execute = true

while(execute) {
    let response = window.prompt('Deseja continuar? 1=Sim, 2=Não')

    if(response === '2'){
        execute = false
    }
}
console.log('Saiu do loop!') */

// Do while
/* let value = 15

// testa antes
while(value < 10) {
    value ++
    console.log('while: ', value)
}
// testa depois, garante pelo menos uma execucao
do {
    value ++
    console.log('do while: ', value)
} while(value < 10) */


/* let i = 0
while(i < 10) {
    console.log('i = ', i)
    i++
} */

/* console.log('------------------')

// For
for(let i = 0; i < 10; i++) {
    console.log('i = ', i)
} */

// Tabuada
/* for(let n1 = 1; n1 <= 10; n1++) {    

    for(let n2 = 1; n2 <= 10; n2++) {

        let total = n1 * n2

        console.log(`${n1} * ${n2} = ${total}`)
    }
} */

/* const frutas = ['Maça', 'Banana', 'Uva', 'Kiwi']
//console.log(frutas[1])
//console.log(frutas.length)

// Percorrendo array
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
} */

// Array contendo objetos
/* const produtos = [
    { nome: 'Notebook', preco: '5000' }, 
    { nome: 'Celular', preco: '1500' }, 
    { nome: 'Mouse', preco: '167' }, 
]

// Percorrendo array
for(let i = 0; i < produtos.length; i++) {
    // const nome = produtos[i].nome
    // const preco = produtos[i].preco
    // console.log(nome, preco) 

    // Desestruturação
    const { nome, preco } = produtos[i]
    //console.log(nome, preco)

    console.log(`Produto: ${nome} - R$${preco}`)
} */

/* const produtos = [
    { nome: 'Notebook', preco: '5000' }, 
    { nome: 'Celular', preco: '1500' }, 
    { nome: 'Mouse', preco: '167' }, 
]

for (let idx in produtos){
    console.log(idx)
}

const produto = { nome: 'Notebook', preco: '5000' }
for (let prop in produto){
    console.log(prop)
} */

/* const frutas = ['Maça', 'Banana', 'Uva']

for (let value of frutas){
    console.log(value)
}

// somente para array - da erro
const produto = { nome: 'Notebook', preco: '5000' }
for (let value of produto){
    console.log(value)
}  */

// Break interrompe o fluxo/loop 
/* for(let i = 0; i < 10; i++) {
    if(i === 5){
        console.log('Interrompeu!')
        break
    }
    console.log('i = ', i)
} */ 


/* for(let i = 0; i < 10; i++) {
    if(i === 5){
        console.log('Pulou!')
        continue
    }
    console.log('i = ', i)
}  */

// Tabuada
for(let n1 = 1; n1 <= 10; n1++) {    

    for(let n2 = 1; n2 <= 10; n2++) {

        let total = n1 * n2

        // Módulo % retorna o resto da divisão exata

        // só os pares
        if(total % 2){
           continue
        }

        // só os ímpares
        //if(!(total % 2)){
        //   continue
        //}

        console.log(`${n1} * ${n2} = ${total}`)
    }
} 
