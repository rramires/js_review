// fields
const addItemForm = document.getElementById('addItemForm')
const itemInput = document.getElementById('itemInput')
const listItems = document.getElementById('listItems')
const alertDanger = document.getElementById('alertDanger')


// variaveis
let item = ''
let increment = 0

// eventos
addItemForm.addEventListener('submit', function(event){
    event.preventDefault()

    // pegando valor do campo
    item = itemInput.value

    if(item === ''){
        alert('Preencha o campo item')
    } else {
        addItem()
    }
})

function deleteItem(event){
    //console.log('deleteItem: ', event.currentTarget)

    // pega o elemento acima do botao (parentNode)
    const currentLi = event.currentTarget.parentNode

    // remove
    currentLi.remove() 

    // mostra o danger
    showDanger()
}

function addItem() {
    //console.log('valor', item)

    // adiciona mais 1
    increment ++
    
    // adiciona um bloco de html
    listItems.innerHTML += 
    `<li class="list-item" id="item-${increment}">
        <div class="checkbox-item">
            <input type="checkbox" class="checkbox" id="checkbox-${increment}">
            <label class="checkbox-label" for="checkbox-${increment}">${item}</label>
            <button class="delete-btn" aria-label="Remover item" onclick="deleteItem(event)">
                <img src="assets/delete-icon.svg" alt="">
            </button>
        </div>
    </li>`

    // limpa o campo
    itemInput.value = ''

    // esconde o danger
    hideDanger()
}

function showDanger() {
    alertDanger.classList.add('show-danger')
}

function hideDanger() {
    alertDanger.classList.remove('show-danger')
}
