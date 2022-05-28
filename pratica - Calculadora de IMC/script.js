function calcular(){
    var pesotxt = window.document.querySelector('input#txtn1')
    var alturatxt = window.document.querySelector('input#txtn2')
    var res = window.document.querySelector('div#res')
    var peso = Number(pesotxt.value)
    var altura = Number(alturatxt.value)
    

    if (alturatxt.value.length == 0) {
        window.alert('Por favor insira a altura.')
    } else if (pesotxt.value.length == 0) {
        window.alert('Por favor insira o peso.') 
    } else if ( peso <= 0 || altura <= 0){
        window.alert('Digite valores acima de 0')    
    } 


            var imc = peso/altura**2

        if (imc < 18.5) {
           res.innerHTML = 'Abaixo do peso normal' 
        } else if (imc >= 18.5 && imc < 25) {
            res.innerHTML = 'Peso normal'
            } else if (imc >= 25 && imc < 30) {
                     res.innerHTML = 'Excesso de peso'
                } else if (imc >= 30 && imc < 35) {
                        res.innerHTML = 'Obesidade classe I'
                } else if (imc >= 35 && imc < 40) {
                            res.innerHTML = 'Obesidade classe II'
                } else {
                    res.innerHTML = 'Obesidade classe III'
                  
                }


}