var agora = new Date()
var hora = agora.getHours()

console.log (`Agora são extamente ${hora} Hrs`)

if (hora > 5 && hora < 12) {
    console.log('Está de manhã')
} else if (hora > 12 && hora < 19) {
    console.log('Está de tarde')
} else if (hora > 19 && hora < 24) {
    console.log('Está de noite')
} else if (hora < 5 ) {
    console.log('Está de madrugada')
}