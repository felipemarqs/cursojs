function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var fundo = window.document.querySelector('body#fundo')
    var data = new Date()
    var hora = data.getHours()
    hora = 19

    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background ='#edbf8d'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background ='#8a5863'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background ='#081c1d'
    }
}
//#081c1d Noite
//#8a5863 Tarde
//#edbf8d Manha
