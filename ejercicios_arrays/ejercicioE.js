//################################################################################
// EJERCICIO E
// Vector de 7 números aleatorios (0-50). Ordenar de mayor a menor y calcular
// la mediana.
//################################################################################
const vector = Array.from({length:7}, () => Math.floor(Math.random()*51))
console.log(vector)
vector.sort((a,b) => (b - a))
console.log(vector)
console.log(`Mediana: ${vector[Math.floor(vector.length)/2]}`)
