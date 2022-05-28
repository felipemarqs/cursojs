var n = 528

if (n < 100) {
    console.log(`O número ${n} é menor que 100`)
} else if (n > 100 && n < 200) {
    console.log(`O número ${n} é maior que 100 e menor que 200`)
} else if (n > 200 && n < 1000) {
    console.log(`O número ${n} é maior que 200 e menor que 1000`)
} else {
    console.log(`O número ${n} é maior que 1000.`)
}

if (n%2 == 0) {
    console.log(`O número ${n} é Par.`)
} else {
    console.log(`O número ${n} é ìmpar`)
}

