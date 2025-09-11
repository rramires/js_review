// Aritimeticos

// Soma
console.log(10 + 5);

// Subtracao
console.log(10 - 5);

// Multiplicacao
console.log(10 * 5);

// Divisao
console.log(10 / 5);

// Módulo
console.log('O resto é: ', 12 % 2);
console.log('O resto é: ', 13 % 2);

let segundos = 120 // Teste com 59, 60, 65 e 120 pra entender
console.log('Minutos: ', parseInt(segundos / 60));
console.log('Segundos: ', segundos % 60);

// Exponencial
console.log(3 ** 3)


// Incremento e Decremento
let v1 = 10

// Incremento: v1 = v1 + 1
v1 ++
console.log(v1)

// Decremento: v1 = v1 - 1
v1 --
console.log(v1)

// Incremento definindo valor: v1 = v1 + 5
v1 += 5
console.log(v1)

// Decremento definindo valor: v1 = v1 - 5
v1 -= 5
console.log(v1)

// Incrementa depois
console.log(v1++)
console.log(v1)

// Incrementa antes
console.log(++v1)


// Operadores lógicos: resultado booleano
let one = 1
let two = 2
// == igual a, 
console.log(one == two)

// != diferente de
console.log(one != two)

// == igual a, olha o "problema"
console.log(one == "1")

// Estritos, olha pro tipo e valor
// === Estritamente igual
console.log(one === "1")

// !== Estritamente diferente
console.log(one !== "2")

// Maior, menor
let balance = 500
let payment = 120

// Maior 
console.log(balance > payment)

// Menor 
console.log(balance < payment)

// Problema
balance = 120
console.log(balance > payment)

// Maior ou igual
console.log(balance >= payment)

// Menor ou igual
console.log(balance <= payment)


// Atribuicao
let value
console.log(value)

// Atribuicao simples
value = 10
console.log(value)

// Multiplicando
value *= 2
console.log(value)

// Dividindo
value /= 2
console.log(value)

// Potencia
value **= 2
console.log(value)

// Módulo (resto)
value %= 2
console.log(value)

// Operadores lógicos
let emailIsValid = true
let passwordIsValid = true

// AND (E) && Para resultar true, todas devem ser verdadeiras
console.log(emailIsValid && passwordIsValid)

// OR (OU) || Para resultar true, necessita apenas uma verdadeira
passwordIsValid = false 
console.log(emailIsValid || passwordIsValid)

// ! (Exclamacao) Negacao Inverte a condicao
console.log(emailIsValid, !emailIsValid)
console.log(passwordIsValid, !passwordIsValid)




