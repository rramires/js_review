function values(a, ...rest) {
    console.log(a, ...rest)
    console.log(a, ...rest)
}

values(2, 3, 4)

// spread
function calc(operacao, ...rest){
    // usa o spread para popular o array
    const values = [...rest]
    //console.log(values)

    // pega o valor da primeira posicao
    let result = values[0]

    // percorre o array, a partir do segundo (i = 1, segundo elemento do array)
    for(let i = 1; i < values.length; i++ ){
        // console.log(values[i])
        switch(operacao){
            case 'sum': 
                result += values[i]
            break
            case 'mult': 
                result *= values[i]
            break
        }
    }
    return result 
}

let res = calc('sum', 1, 2, 3, 4)
console.log('Resultado: ', res)

res = calc('mult', 1, 2, 3, 4)
console.log('Resultado: ', res)