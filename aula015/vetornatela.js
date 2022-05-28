var vetores = [8 , 5, 6 ,7]
vetores.sort()
/*
for (var c = 0 ; c < vetores.length ; c++){
    console.log(vetores[c])
}
*/

for(var pos in vetores) {
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}`)
}