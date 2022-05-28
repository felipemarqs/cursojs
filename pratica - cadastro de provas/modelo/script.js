let txtq = window.document.querySelector('input#txtq')
let p = window.document.querySelector('span#p')
let gabarito = []
let contador
let res = window.document.querySelector('div#teste')
let teste = window.document.querySelector('p#teste')

function adicionar(){

    if (txtq.value == 0 || txtq.value > 5) {
        window.alert("Digite valores entre 1 e 5")
    } else {
        gabarito.push(Number (txtq.value))
       
        p.innerHTML = `Digite a ${gabarito.length + 1}ª questão`
        
        let item = document.createElement('p')
        item.text = `teste`
        teste.appendChild(item) 
    }
    
}

