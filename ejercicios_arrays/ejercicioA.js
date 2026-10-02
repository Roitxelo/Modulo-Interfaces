//################################################################################
// EJERCICIO A
// Generar un vector "temperaturas" de 7 valores aleatorios entre -5 y 35 grados.
// Mostrar cada temperatura junto con su equivalente en Fahrenheit y si es
// "Fría", "Templada" o "Calurosa".
//################################################################################


const temperatura = Array.from({length: 7}, () => Math.floor(Math.random()*41)-5)

temperaturas.forEach(t => {
    const f = (t * 9/5 + 32).toFixed(2)
    const categoria = t < 10 ? "FRÍO" : (t < 20 ? "TEMPLADA" : "CALUROSA")
    console.log(`Temperatura: ${t}ºC, Fahrenheit: ${f}ºF, Categoría: ${categoria}`)
})

