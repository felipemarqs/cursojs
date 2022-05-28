function gerar(){
    var txtn1 = window.document.querySelector('input#txtn1')
    var res = window.document.querySelector('div#res')
    var tabuada = window.document.querySelector('select#tabuada')
    var n1 = Number(txtn1.value)
    
    if (txtn1.value.length == 0) {
        window.alert('Numero invalido')
    } else {
        tabuada.innerHTML = n1 + 9 
    }

}