//################################################################################
// EJERCICIO A
// Generar un vector "temperaturas" de 7 valores aleatorios entre -5 y 35 grados.
// Mostrar cada temperatura junto con su equivalente en Fahrenheit y si es
// "Fría", "Templada" o "Calurosa".
//################################################################################

const min = -5
const max = 35
let temperaturas = new Array()


for (let i = 0; i < 6; i++) {
    temperaturas.push(parseInt(Math.floor(Math.random() * (max - min) + min)));
    console.log(`${i}. Temperatura: ${temperaturas[i]}
        Equiv. Fahrenheit: ${temperaturas[i] + 33.8}
            ${estado(temperaturas[i])}`)
    
}

function estado(temperatura){
    if (temperatura < 18) {
        console.log("Fría")
    }if (temperatura >= 18 && temperatura < 26) 
        console.log("Templada")
    else {
        console.log("Calurosa")
    }
}

