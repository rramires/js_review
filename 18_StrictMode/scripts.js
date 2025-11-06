"use strict"

function showMessage(){
    //"use strict"

    let personName = "Fulano"
    console.log('Olá', personName)
}
showMessage()


class Student {
    get point() {
        return 7
    }
}

let student = new Student()
// student.point = 2 // gera erro por ser apenas um getter
console.log(student.point)

// delete window.document // gera erro, tentando deletar algo somente leitura

/* function (a, a, c){
    return a + a + c
} */ // gera erro, parametros duplicados