// Funcoes
function hello(){
    console.log('Hello Function!')
}

hello()

// Funcoes com parametros
function sumN(v1, v2){
    console.log('Result:', v1 + v2)
}

sumN(1, 3)
sumN(5, 3)

// Funcoes com retorno
function sumN2(v1, v2){
    return v1 + v2
}

let res1 = sumN2(1, 3)
console.log(res1)

res1 = sumN2(1)
console.log(res1) // NaN


// Valor padrao
function sumN3(v1 = 0, v2 = 0){
    return v1 + v2
}
res1 = sumN3(1)
console.log(res1)


// JSDoc

/**
 * Authenticate the user
 * @param {String} email  user email
 * @param {String} password more than 6 chars
 * @returns {Number} return user id
 */
function signIn(email, password){
    // Todo o fluxo de login
    return 321
}

signIn()


// Arrow Function
const showMessage1 = () => {
    console.log('Olá!')
}
showMessage1()

const showMessage2 = (name) => {
    console.log('Olá, ', name)
}
showMessage2('Sicrano')


// Callback Function
function callBackOK(){
    console.log('Tatefa executada! Download OK')
}

function execute(taskName, callback){
    
    console.log('Executando a tarefa: ', taskName)

    callback()
}

execute("Download", callBackOK)

execute("Upload", function(){
    console.log('Tatefa executada! Upload OK')
})

execute("Gravando", () => {
    console.log('Tatefa executada! Gravou OK')
})


execute("Salvando", _ => console.log('Tatefa executada! Gravou OK'))
