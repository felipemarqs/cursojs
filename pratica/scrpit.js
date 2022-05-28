

function verificar(){
    var sexo = window.document.getElementsByName('radsex')
    var idade = window.document.querySelector('input#idade')
    var cabelo = window.document.getElementsByName('radcabelo')
    var quantidade = window.document.querySelector('input#quantidade')
    var qtdhomem = 0
    var qtdmulher = 0
    res = window.document.getElementById('res')
    //res.innerHTML = 'Testandooo'
    //função pra pegar resultado do label  (fsex[0].checked)
    
    var age = Number(idade.value)
    var c = Number(quantidade.value)
    if(idade.value.length == 0){
        window.alert('Por favor insira uma idade')
    }


         if (sexo[0] && age >= 18 && cabelo[0]  ) {
            qtdhomem += 1
        
        } else if (sexo[1] && age >= 25 && age <= 30) {  
             qtdmulher += 1
             res.innerHTML = 'mulher'
        }

     
       
    
    res.innerHTML = `Foram verificados ${qtdhomem} maior de 18 anos com cabelo castanho.`
}  