// elementos html
const main = document.querySelector('main')
const lottery_form = document.getElementById('lottery_form')
const qty_input = document.getElementById('qty_input')
const min_input = document.getElementById('min_input')
const max_input = document.getElementById('max_input')
const no_repeat = document.getElementById('no_repeat')
const result_grid = document.getElementById('result_grid')
const again_btn = document.getElementById('again_btn')

// 1 - Função para atualizar validações dinâmicas
function updateValidations() {
    const qty = parseInt(qty_input.value) || 1
    const min = parseInt(min_input.value) || 1
    
    // Define o mínimo do max_input baseado na quantidade e mínimo
    const minRequired = min + qty + 1
    max_input.min = minRequired
    
    // Atualiza a mensagem visual se necessário
    const max = parseInt(max_input.value) || 0

    if(max < minRequired) {
        max_input.value = minRequired
    }
}
// Executa ao carregar
updateValidations()

// Adiciona listeners para atualizar em tempo real
qty_input.addEventListener('change', updateValidations)
min_input.addEventListener('change', updateValidations)
max_input.addEventListener('change', updateValidations) 

// sorteio 
function getRandomByRange(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// array de resultados
const results = []

// formulário de sorteio
lottery_form.addEventListener('submit', function(event){
    event.preventDefault();

    // 2 - pega os valores digitados
    const qty = parseInt(qty_input.value)
    const min = parseInt(min_input.value)
    const max = parseInt(max_input.value)
    // console.log(qty, min, max)

    // 3 - loop até atingir a quantidade 
    for(let i = 0; i < qty; i++){
        // 3 - Faz o sorteio
        let res = getRandomByRange(min, max)

        // console.log('no_repeat.checked', no_repeat.checked)
        // se for marcado o toggle
        let newRes = res
        if(no_repeat.checked) {
            // Verifica se o número já existe no array
            while(results.includes(res) && newRes === res) {
                // se sim repete o sorteio
                newRes = getRandomByRange(min, max)
            }
            results.push(newRes)
        } else {
            // insere no array 
            results.push(res)
        }
    }
    console.log(results)

    // 4 - Monta o html do resultado
    /* let tmpHtml = ''
    for(let i = 0; i < results.length; i++){
        // pega o numero sorteado
        let num = results[i]
        tmpHtml += `<div class="result-badge animate-number">${num}</div>`
    }
    result_grid.innerHTML = tmpHtml */

    result_grid.innerHTML = '' // limpa antes de começar
    function addNextNumber(index) {
        // condição
        if (index < results.length) {
            // pega o atual
            let num = results[index]
            // adiciona, sem recriar tudo como usando o innerHTML
            result_grid.insertAdjacentHTML('beforeend', `<div class="result-badge animate-number">${num}</div>`)
            // chama essa mesma funcao depois de um tempo
            setTimeout(function() {
                index++
                addNextNumber(index)
            }, 3000) // 3000ms = 1s
        }
    }
    addNextNumber(0) // chama a primeira vez

    // 5 - Exibe o resultado
    main.classList.add('show-result')
})

// 6 - Reload/reset
again_btn.addEventListener('click', function(event){
    // limpa o array
    results.splice(0, results.length)
    // reseta o formulário
    lottery_form.reset()
    // Volta ao início
    main.classList.remove('show-result')
    // Revalida após reset
    updateValidations()
})