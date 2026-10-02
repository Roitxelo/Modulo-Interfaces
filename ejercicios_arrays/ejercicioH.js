//################################################################################
// EJERCICIO H
// Matriz 4x4 con valores aleatorios (1-9). Calcular la suma de la diagonal
// principal y de la diagonal secundaria.
//################################################################################

let matriz = Array.from({length:4}, ()=> 
            Array.from({length:4}, () => Math.floor(Math.random()*9)+1))

let diagonalPrincipal = matriz.reduce((suma, fila, i) => suma + fila[i], 0)
let diagonalSecundaria = matriz.reduce((suma, fila, i) => suma + fila[fila.length-1-i], 0)

console.log(`A diagonal principal é: ${diagonalPrincipal}`)
console.log(`A diagonal secundaria é: ${diagonalSecundaria}`)