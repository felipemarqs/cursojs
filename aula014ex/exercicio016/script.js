function contar(){
    var inicio = window.document.querySelector('input#txti'); //Jogando os valores na variável
    var fim = window.document.querySelector ('input#txtf');   //Jogando os valores na variável  
    var passo = window.document.querySelector('input#txtp');  //Jogando os valores na variável
    var res = window.document.querySelector('div#res');       //Jogando os valores na variável

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Dados Inválidos')                     //Se não tiver nada escrito ele entrará nesse if
        res.innerHTML = 'Impossivel Contar'
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)    //Colocando valores inteiros/float nas variáveis
        var f = Number(fim.value)       //1º Declarar a variável -> 2º "Jogar" o valor da string na variável
        var p = Number(passo.value)     // usando o 'Number(var.value)

        if (p <= 0) {
            window.alert('Passo 0 é invalido, passo será considerado 1')
            p = 1
        }
    
        
        if (i < f) {
            for (var c = i; c <= f ; c += p ) {
                res.innerHTML += ` ${c} \u{263A}` //Utilizando emojis com JS \u{código do emoji}
            }        
        } else {
            for (var c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{263A}`
            }

        }
    }







   /* if (passo.value.length == 0){
        window.alert('Passo será = 1')
        passo.value = 1
    }*/

}